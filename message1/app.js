const CORRECT_ANSWERS = {
  // SET 1
  's1q0': 'B', 's1q1': 'B', 's1q2': 'A', 's1q3': 'C', 's1q4': 'C', 's1q5': 'A', 's1q6': 'B', 's1q7': 'B', 's1q8': 'C', 's1q9': 'C',
  // SET 2
  's2q0': 'A', 's2q1': 'C', 's2q2': 'C', 's2q3': 'B', 's2q4': 'A', 's2q5': 'C', 's2q6': 'A', 's2q7': 'B', 's2q8': 'C', 's2q9': 'A',
  // SET 3
  's3q0': 'B', 's3q1': 'C', 's3q2': 'A', 's3q3': 'C', 's3q4': 'B', 's3q5': 'C', 's3q6': 'B', 's3q7': 'C', 's3q8': 'B', 's3q9': 'C',
  // SET 4
  's4q0': 'B', 's4q1': 'C', 's4q2': 'C', 's4q3': 'C', 's4q4': 'B', 's4q5': 'A', 's4q6': 'C', 's4q7': 'B', 's4q8': 'A', 's4q9': 'B',
  // SET 5
  's5q0': 'B', 's5q1': 'A', 's5q2': 'A', 's5q3': 'C', 's5q4': 'C', 's5q5': 'C', 's5q6': 'C', 's5q7': 'B', 's5q8': 'C', 's5q9': 'A'
};

const EXPLANATIONS = {
  // SET 1
  's1q0': "Biển báo nói về việc giảm giá đặc biệt cho pizza cỡ lớn để chia sẻ cùng bạn bè.", 's1q1': "Cô Walsh sẽ công bố những ý tưởng tái chế nào đã được nhà trường lựa chọn.", 's1q2': "Sarah đang rủ thêm mọi người cùng tham gia dự án trồng cây bảo vệ môi trường.", 's1q3': "Cửa hàng đang chuyển đến địa điểm mới nên giảm giá một nửa tất cả các mặt hàng.", 's1q4': "Carrie đang tìm bộ đồ tập gym và hỏi mẹ xem có để quên trên xe của mẹ không.", 's1q5': "Lena báo sẽ đi nhờ xe mẹ và đề nghị hẹn gặp Marta tại trung tâm mua sắm.", 's1q6': "Huấn luyện viên muốn cả đội tập luyện thêm để chuẩn bị cho trận đấu quan trọng sắp tới.", 's1q7': "Bạn cần cung cấp mã số sinh viên cho nhân viên trước khi sử dụng máy tính tại đây.", 's1q8': "Mẹ muốn biết Tom có thời gian tự đi lấy vợt hay cần mẹ lấy giúp trên đường về.", 's1q9': "Cửa hàng bán nhạc cụ cũ (đã qua sử dụng) với mức giá rất hợp lý.",
  // SET 2
  's2q0': "Mẹ nhờ Anton nhắc em gái nhớ rằng bố sẽ đến đón chứ không phải mẹ.", 's2q1': "Bộ phim được chuyển thể từ một cuốn tiểu thuyết (fiction book) nổi tiếng.", 's2q2': "Nếu muốn giữ sách mượn qua kỳ nghỉ hè, học sinh phải hỏi nhân viên thư viện.", 's2q3': "Nicola muốn trả lại chiếc khuyên tai cho người đã đánh rơi nó.", 's2q4': "Xe đạp trẻ em không có sẵn mọi lúc mà phải được đặt trước.", 's2q5': "Biển báo cảnh báo tuyết rơi dày, người lái xe cần chú ý an toàn.", 's2q6': "Mrs Jones tổ chức sự kiện trao đổi sách cũ giữa các học sinh.", 's2q7': "Sophie và Billy đang thảo luận kế hoạch đi xem phim cùng nhau.", 's2q8': "Huấn luyện viên thông báo lịch tập bóng bầu dục có sự thay đổi.", 's2q9': "Thực đơn mới cho phép khách hàng tự chọn các món ăn kết hợp.",
  // SET 3
  's3q0': "Mrs Evans nhắc nhở học sinh về thời gian của buổi biểu diễn văn nghệ.", 's3q1': "Biển báo yêu cầu không cho vịt ăn các loại thức ăn gây hại cho chúng.", 's3q2': "Tim để lại lời nhắn rủ đi bơi và thông báo thời gian.", 's3q3': "Jade nhờ bạn bè giúp tìm chiếc khuyên tai bị mất.", 's3q4': "Phòng Mỹ thuật đang tạm đóng cửa để tiến hành sửa chữa.", 's3q5': "Katie đang chia sẻ cảm nhận về cuốn tiểu thuyết mà cô ấy vừa đọc.", 's3q6': "Khu vực để xe đạp này được dành riêng cho nhân viên.", 's3q7': "Mr Davidson gửi email cung cấp thông tin về buổi chiếu phim.", 's3q8': "Câu lạc bộ đua thuyền thông báo cập nhật lịch hoạt động.", 's3q9': "Bạn có thể tìm thông tin về vé xem đêm nhạc trên website.",
  // SET 4
  's4q0': "Cửa hàng trong trường thông báo thay đổi giờ mở cửa.", 's4q1': "Jake nhắn tin nói về kế hoạch đi mua sắm của mình.", 's4q2': "Chương trình ưu đãi đặc biệt khi khách hàng đặt mua pizza.", 's4q3': "Mr Wood gửi email nhắc nhở học sinh về quy định phân loại rác.", 's4q4': "Mel thừa nhận rằng cô ấy cảm thấy sợ hãi khi xem bộ phim đó.", 's4q5': "Jenny gửi email cập nhật tình hình chuyến tàu của cô ấy.", 's4q6': "Thông tin về bài giảng sắp tới với chủ đề 'Sweet Memories'.", 's4q7': "Jack nhắn tin hỏi bạn về cuốn sách thế giới động vật hoang dã.", 's4q8': "Nhãn chai tương cà chua cung cấp thông tin chi tiết về thành phần.", 's4q9': "Một gia sư dạy trống dán thông báo tìm kiếm học viên mới.",
  // SET 5
  's5q0': "Ali nhắn Zara cứ ăn tối trước vì anh ấy sẽ về muộn.", 's5q1': "Mark dán thông báo muốn bán một số đồ đạc cũ.", 's5q2': "Biển báo quy định về việc mượn và sử dụng dụng cụ chơi tennis.", 's5q3': "Olivia thông báo thời gian và địa điểm tập trung của câu lạc bộ chạy bộ.", 's5q4': "Email cung cấp thông tin về lớp học nghệ thuật cho sinh viên.", 's5q5': "Anne nhắn tin hỏi về vé cho buổi diễn kịch sắp tới.", 's5q6': "Bảng tin thông báo các hoạt động dành riêng cho sinh viên năm cuối.", 's5q7': "Biển hướng dẫn phân loại rác tại trung tâm tái chế.", 's5q8': "Gabriel rủ bạn bè cùng tham gia sự kiện nhảy silent disco.", 's5q9': "Nhà hàng lưu ý khách hàng cần báo trước cho bồi bàn nếu bị dị ứng thực phẩm."
};

// Map the specific class names used in your HTML for each set
const SELECTORS = {
    1: { block: '.question-block', options: '.options-col' },
    2: { block: '.question-block', options: '.options-list' },
    3: { block: '.question-container', options: '.options-col' },
    4: { block: '.question-row', options: '.options-column' },
    5: { block: '.question-block', options: '.options-pane' }
};

let questionBank = [];
let currentIndex = 0;
let isAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
    extractAndWireQuestions();
    shuffleArray(questionBank);
    renderCurrentQuestion();

    // Listen for 'Enter' key to go to the next question
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && isAnswered) goToNextQuestion();
    });
});

function extractAndWireQuestions() {
    for (let s = 1; s <= 5; s++) {
        const blocks = document.querySelectorAll(`.set-${s} ${SELECTORS[s].block}`);
        blocks.forEach((block, i) => {
            const qId = `s${s}q${i}`;
            
            const optionsContainers = block.querySelectorAll('.option-item, li, .option');
            optionsContainers.forEach((optContainer, idx) => {
                const letter = String.fromCharCode(65 + idx);
                
                const originalContent = optContainer.innerHTML;
                optContainer.innerHTML = '';
                
                const label = document.createElement('label');
                label.className = 'rc-radio-container';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = qId;
                radio.value = letter;
                
                radio.addEventListener('change', () => handleAnswerSelect(qId, letter));
                
                const textSpan = document.createElement('span');
                textSpan.innerHTML = originalContent;
                
                label.appendChild(radio);
                label.appendChild(textSpan);
                optContainer.appendChild(label);
            });
            
            // Save the exact set number and wrapper class so we can style it later
            questionBank.push({ 
                id: qId, 
                setId: s, 
                optionsClass: SELECTORS[s].options,
                domElement: block 
            });
        });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderCurrentQuestion() {
    const app = document.getElementById('quiz-app');
    app.innerHTML = ''; 
    isAnswered = false;

    if (currentIndex >= questionBank.length) {
        app.innerHTML = `<h2 style="text-align: center;">Chúc mừng! Bạn đã hoàn thành tất cả ${questionBank.length} câu hỏi.</h2>`;
        return;
    }

    const currentQ = questionBank[currentIndex];
    
    const progress = document.createElement('div');
    progress.className = 'quiz-progress';
    progress.innerText = `Câu hỏi ${currentIndex + 1} / ${questionBank.length}`;
    app.appendChild(progress);

    // Reset radio buttons
    const radios = currentQ.domElement.querySelectorAll('input[type="radio"]');
    radios.forEach(r => {
        r.checked = false;
        r.disabled = false;
        r.parentElement.style.color = '';
        r.parentElement.style.fontWeight = '';
        r.parentElement.style.textDecoration = '';
    });

    // Remove old explanations or buttons from DOM
    const oldEx = currentQ.domElement.querySelector('.explanation-box');
    if(oldEx) oldEx.remove();
    const oldBtn = document.querySelector('.next-btn');
    if(oldBtn) oldBtn.remove();

    // CRITICAL FIX: Re-wrap the question in its original set class so your CSS applies!
    const cssWrapper = document.createElement('div');
    cssWrapper.className = `set-${currentQ.setId} active-question-wrapper`;
    cssWrapper.style.width = '100%';
    cssWrapper.appendChild(currentQ.domElement);

    app.appendChild(cssWrapper);
}

function handleAnswerSelect(qId, selectedLetter) {
    if (isAnswered) return;
    isAnswered = true;

    const currentQ = questionBank.find(q => q.id === qId);
    const correctLetter = CORRECT_ANSWERS[qId];
    const radios = currentQ.domElement.querySelectorAll('input[type="radio"]');
    
    radios.forEach(r => {
        r.disabled = true; 
        if (r.value === correctLetter) {
            r.parentElement.style.color = 'green';
            r.parentElement.style.fontWeight = 'bold';
        } else if (r.value === selectedLetter && selectedLetter !== correctLetter) {
            r.parentElement.style.color = 'red';
            r.parentElement.style.textDecoration = 'line-through';
        }
    });

    const expBox = document.createElement('div');
    expBox.className = 'explanation-box';
    expBox.innerHTML = `<strong>Giải thích:</strong> ${EXPLANATIONS[qId]}`;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.innerText = 'Tiếp tục (Enter)';
    nextBtn.onclick = goToNextQuestion;

    // Use the specific options class for this exact set to append the explanation
    const optionsWrapper = currentQ.domElement.querySelector(currentQ.optionsClass);
    if (optionsWrapper) {
        optionsWrapper.appendChild(expBox);
    }
    
    document.getElementById('quiz-app').appendChild(nextBtn);
}

function goToNextQuestion() {
    currentIndex++;
    renderCurrentQuestion();
}