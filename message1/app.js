/**
 * Reading Comprehension Exercises - Interactive JS
 * Adds radio buttons to every question and checks answers on selection.
 */

// ─── Correct answers ────────────────────────────────────────────────────────
// Format: [ set, question-index-within-set (0-based), correct letter ]
const CORRECT_ANSWERS = {
  // SET 1
  's1q0':  'B', // Toni's Pizza Bar
  's1q1':  'B', // Mrs Walsh email
  's1q2':  'A', // Sarah tree-planting text
  's1q3':  'C', // Brown's Books sign
  's1q4':  'C', // Carrie gym kit text
  's1q5':  'A', // Lena bus/shopping text
  's1q6':  'B', // Coach hockey email
  's1q7':  'B', // Study Centre sign
  's1q8':  'C', // Mum/Tom tennis racket text
  's1q9':  'C', // Milton Music Store sign

  // SET 2
  's2q0':  'A', // Anton basketball text
  's2q1':  'C', // Ben Whitham film sign
  's2q2':  'C', // Mrs Hoskins library email
  's2q3':  'B', // Nicola earring text
  's2q4':  'A', // Bikes for Hire sign
  's2q5':  'C', // Heavy snow sign
  's2q6':  'A', // Mrs Jones book exchange notice
  's2q7':  'B', // Sophie/Billy cinema text
  's2q8':  'C', // Coach rugby email
  's2q9':  'A', // Café Menu sign

  // SET 3
  's3q0':  'B', // Mrs Evans school performance email
  's3q1':  'C', // Duck feeding sign
  's3q2':  'A', // Tim swimming note
  's3q3':  'C', // Jade earring text → help replace
  's3q4':  'B', // Art Room closed notice
  's3q5':  'C', // Katie novel text
  's3q6':  'B', // Bicycle sign
  's3q7':  'C', // Mr Davidson film email
  's3q8':  'B', // Sailing club notice
  's3q9':  'C', // Melt concert website

  // SET 4
  's4q0':  'B', // College Shop notice
  's4q1':  'C', // Jake shopping trip text
  's4q2':  'C', // Special pizza offer
  's4q3':  'C', // Mr Wood recycling email
  's4q4':  'B', // Mel cinema text (admit frightened)
  's4q5':  'A', // Jenny train email
  's4q6':  'C', // Sweet Memories lecture
  's4q7':  'B', // Jack wildlife book text
  's4q8':  'A', // Tomato sauce label
  's4q9':  'B', // Drum Tutor notice

  // SET 5
  's5q0':  'B', // Ali takeaway text (Zara should have dinner without Ali)
  's5q1':  'A', // Mark for-sale note
  's5q2':  'A', // Tennis equipment plaque
  's5q3':  'C', // Olivia running club text
  's5q4':  'C', // College Art Class email
  's5q5':  'C', // Anne theatre text
  's5q6':  'C', // Final-year students corkboard
  's5q7':  'B', // Recycling centre plaque
  's5q8':  'C', // Gabriel silent disco text
  's5q9':  'A', // Restaurant ingredients torn paper
};

// ─── Styles injected into <head> ────────────────────────────────────────────
const STYLES = `
  .rc-options-wrapper { display: flex; flex-direction: column; gap: 0; }

  .rc-radio-label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 6px;
    transition: background 0.15s;
    margin-bottom: 4px;
  }
  .rc-radio-label:hover { background: #f0f0f0; }

  .rc-radio-label input[type="radio"] {
    margin-top: 3px;
    accent-color: #444;
    flex-shrink: 0;
  }

  /* States */
  .rc-radio-label.correct {
    background: #d4edda !important;
    border-radius: 6px;
  }
  .rc-radio-label.wrong {
    background: #f8d7da !important;
    border-radius: 6px;
  }
  .rc-radio-label.reveal-correct {
    background: #d4edda !important;
    border-radius: 6px;
  }

  .rc-feedback {
    font-size: 0.85em;
    font-weight: bold;
    margin-top: 8px;
    padding: 4px 0;
  }
  .rc-feedback.correct { color: #1a7a35; }
  .rc-feedback.wrong   { color: #b02a37; }
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function injectStyles() {
  const style = document.createElement('style');
  style.textContent = STYLES;
  document.head.appendChild(style);
}

/**
 * Given a container element that holds option items/rows for ONE question,
 * returns an array of { letter, textEl } objects.
 */
function collectOptions(container) {
  const options = [];

  // Pattern A: set-1 / set-3  →  .option-item  with  .option-letter
  const set1Items = container.querySelectorAll('.option-item');
  if (set1Items.length) {
    set1Items.forEach(item => {
      const letterEl = item.querySelector('.option-letter');
      if (letterEl) {
        options.push({ letter: letterEl.textContent.trim(), el: item, textEl: letterEl.nextElementSibling || letterEl });
      }
    });
    return options;
  }

  // Pattern B: set-2 / set-4  →  <li> with first child <strong>
  const liItems = container.querySelectorAll('li');
  if (liItems.length) {
    liItems.forEach(li => {
      const strong = li.querySelector('strong');
      if (strong) {
        options.push({ letter: strong.textContent.trim(), el: li, textEl: li });
      }
    });
    return options;
  }

  // Pattern C: set-5  →  .option  with first child <strong>
  const set5Items = container.querySelectorAll('.option');
  if (set5Items.length) {
    set5Items.forEach(item => {
      const strong = item.querySelector('strong');
      if (strong) {
        options.push({ letter: strong.textContent.trim(), el: item, textEl: item });
      }
    });
    return options;
  }

  return options;
}

/**
 * Wraps the options inside `container` with radio-button labels.
 * `questionKey` → key into CORRECT_ANSWERS.
 */
function addRadioButtons(optionsContainer, questionKey) {
  const optionData = collectOptions(optionsContainer);
  if (!optionData.length) return;

  const correctLetter = CORRECT_ANSWERS[questionKey];
  const groupName = `q_${questionKey}`;

  // Build a wrapper div to hold the new radio labels
  const wrapper = document.createElement('div');
  wrapper.className = 'rc-options-wrapper';

  // Feedback element
  const feedback = document.createElement('div');
  feedback.className = 'rc-feedback';

  optionData.forEach(({ letter, el }) => {
    const label = document.createElement('label');
    label.className = 'rc-radio-label';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = groupName;
    radio.value = letter;

    // Clone the original option content (keeps styling / bold letter)
    const contentClone = el.cloneNode(true);

    label.appendChild(radio);
    label.appendChild(contentClone);
    wrapper.appendChild(label);

    radio.addEventListener('change', () => {
      // Reset all labels in this group
      wrapper.querySelectorAll('.rc-radio-label').forEach(lbl => {
        lbl.classList.remove('correct', 'wrong', 'reveal-correct');
      });

      if (letter === correctLetter) {
        label.classList.add('correct');
        feedback.textContent = '✓ Correct!';
        feedback.className = 'rc-feedback correct';
      } else {
        label.classList.add('wrong');
        feedback.textContent = `✗ Incorrect. The correct answer is ${correctLetter}.`;
        feedback.className = 'rc-feedback wrong';

        // Highlight the correct answer
        wrapper.querySelectorAll('.rc-radio-label').forEach(lbl => {
          const r = lbl.querySelector('input[type="radio"]');
          if (r && r.value === correctLetter) {
            lbl.classList.add('reveal-correct');
          }
        });
      }
    });
  });

  wrapper.appendChild(feedback);

  // Replace the original options content with the new radio wrapper,
  // but keep any question-stem / intro text that precedes the options.
  // Strategy: clear the container and re-insert stem text + wrapper.
  const stemSelectors = [
    '.question-context', '.question-lead', '.options-intro',
    '.context-text', '.question-stem', 'p.question-lead',
    '.options-intro'
  ];

  // Gather stem nodes that live DIRECTLY in the container
  const stemNodes = [];
  optionsContainer.childNodes.forEach(node => {
    const tag = node.nodeName.toLowerCase();
    const cls = (node.classList && node.classList.value) || '';
    const isStem = stemSelectors.some(s => {
      if (s.startsWith('.')) return cls.includes(s.slice(1));
      if (s.startsWith('p.')) return tag === 'p' && cls.includes(s.slice(2));
      return false;
    });
    if (isStem) stemNodes.push(node.cloneNode(true));
  });

  optionsContainer.innerHTML = '';
  stemNodes.forEach(n => optionsContainer.appendChild(n));
  optionsContainer.appendChild(wrapper);
}

// ─── Per-set wiring ───────────────────────────────────────────────────────────

function wireSet1() {
  const blocks = document.querySelectorAll('.set-1 .question-block');
  blocks.forEach((block, i) => {
    const optionsCol = block.querySelector('.options-col');
    if (optionsCol) addRadioButtons(optionsCol, `s1q${i}`);
  });
}

function wireSet2() {
  const blocks = document.querySelectorAll('.set-2 .question-block');
  blocks.forEach((block, i) => {
    const optionsList = block.querySelector('.options-list');
    if (optionsList) addRadioButtons(optionsList, `s2q${i}`);
  });
}

function wireSet3() {
  const blocks = document.querySelectorAll('.set-3 .question-container');
  blocks.forEach((block, i) => {
    const optionsCol = block.querySelector('.options-col');
    if (optionsCol) addRadioButtons(optionsCol, `s3q${i}`);
  });
}

function wireSet4() {
  const rows = document.querySelectorAll('.set-4 .question-row');
  rows.forEach((row, i) => {
    const optionsCol = row.querySelector('.options-column');
    if (optionsCol) addRadioButtons(optionsCol, `s4q${i}`);
  });
}

function wireSet5() {
  const blocks = document.querySelectorAll('.set-5 .question-block');
  blocks.forEach((block, i) => {
    const optionsPane = block.querySelector('.options-pane');
    if (optionsPane) addRadioButtons(optionsPane, `s5q${i}`);
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectStyles();
  wireSet1();
  wireSet2();
  wireSet3();
  wireSet4();
  wireSet5();
});