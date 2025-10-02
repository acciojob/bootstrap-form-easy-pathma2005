<script>
  // Bootstrap validation script
  (function () {
    'use strict';
    const form = document.getElementById('internship-form');

    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  })();
</script>
