document.querySelectorAll('.slideBtn').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('slide');
  });
});
