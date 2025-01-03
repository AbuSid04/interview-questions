import questionsData from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('questions-container');

    questionsData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Question ${index+1}: ${item.question}`;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.innerHTML = `<strong>Answer:</strong> ${item.answer}`;

        const exampleDiv = document.createElement('div');
        exampleDiv.classList.add('example');
        exampleDiv.innerHTML = `<strong>Example:</strong>
        <pre><code>${item.example}</code></pre>`;

        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(answerDiv);
        questionDiv.appendChild(exampleDiv);

        container.appendChild(questionDiv);
    });
});