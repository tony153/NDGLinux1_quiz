let quizData = [];
let currentIndex = 0;
let wrongAnswers = [];
let currentSelected = []; // 儲存當前選中的選項

const startBox = document.getElementById('start-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const optionsContainer = document.getElementById('options-container');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const shouldShuffle = document.getElementById('shuffle-toggle').checked;
    quizData = JSON.parse(JSON.stringify(examination_question));
    if (shouldShuffle) shuffleArray(quizData);

    startBox.classList.add('hidden');
    quizBox.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const current = quizData[currentIndex];
    currentSelected = []; // 重置選中項
    
    document.getElementById('progress-text').innerText = `第 ${currentIndex + 1} 題 / 共 ${quizData.length} 題`;
    document.getElementById('question-text').innerText = current.question;
    
    optionsContainer.innerHTML = '';
    
    // 選項隨機
    const shuffledOptions = shuffleArray([...current.option]);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => toggleOption(opt, btn);
        optionsContainer.appendChild(btn);
    });
}

function toggleOption(opt, btn) {
    if (currentSelected.includes(opt)) {
        // 取消選取
        currentSelected = currentSelected.filter(item => item !== opt);
        btn.classList.remove('selected');
    } else {
        // 選取
        currentSelected.push(opt);
        btn.classList.add('selected');
    }
}

function handleSubmit() {
    if (currentSelected.length === 0) {
        alert("請至少選擇一個答案");
        return;
    }

    const correctAns = quizData[currentIndex].ans;
    
    // 判斷是否正確 (內容一致且數量一致)
    const isCorrect = 
        currentSelected.length === correctAns.length &&
        currentSelected.every(val => correctAns.includes(val));

    if (isCorrect) {
        currentIndex++;
        if (currentIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        // 答錯：整個卡片震動
        quizBox.classList.add('shake');
        
        // 紀錄錯題
        const currentQ = quizData[currentIndex];
        if (!wrongAnswers.find(i => i.question === currentQ.question)) {
            wrongAnswers.push(currentQ);
        }

        // 清除選取狀態，讓使用者重新嘗試或提示錯誤
        setTimeout(() => {
            quizBox.classList.remove('shake');
        }, 400);
    }
}

function showResults() {
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    
    document.getElementById('score-summary').innerText = 
        `測驗結束！總題數：${quizData.length}，答錯題數：${wrongAnswers.length}`;
    
    const ul = document.getElementById('wrong-answers-ul');
    ul.innerHTML = '';
    
    if (wrongAnswers.length === 0) {
        ul.innerHTML = '<li style="color:green; list-style:none;">完美！全部答對。</li>';
    } else {
        wrongAnswers.forEach(item => {
            const li = document.createElement('li');
            li.className = 'wrong-item';
            // ans 可能是陣列，顯示時用逗號隔開
            li.innerHTML = `<strong>問：</strong>${item.question}<br><strong>正解：</strong>${item.ans.join(', ')}`;
            ul.appendChild(li);
        });
    }
}