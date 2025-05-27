document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text === '') return;

  const li = createTaskItem(text);
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}

function createTaskItem(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => li.remove());

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.classList.add('completed');
      document.getElementById('doneList').appendChild(li);
    } else {
      span.classList.remove('completed');
      document.getElementById('todoList').appendChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}
