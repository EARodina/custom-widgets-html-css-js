$(document).ready(function () {
  //  --------- File upload ---------
  const dropzoneBox = document.querySelector('.dropzone__box');
  const inputElement = document.querySelector('.dropzone__area input[type="file"]');
  const dropZoneElement = document.querySelector('.dropzone__area');
  const fileLimit = 25000000;

  if (dropzoneBox) {

    const updateDropzoneFileList = (dropZoneElement, filesArr) => {
      let dropzoneFileMessage = dropZoneElement.querySelector('.dropzone__file-info');
  
      const filesString = filesArr.reduce((acc, file) => {
        acc = acc + `<li>${file.name}, ${file.size} bytes</li>\n`;
        return acc;
      }, '')
  
      dropzoneFileMessage.innerHTML = `<ul>
        ${filesString}
      </ul>`;
    }
  
    inputElement.addEventListener('change', (e) => {
      const filesArr = Array.from(inputElement.files);
      const totalSize = filesArr.reduce((acc, file) => {
        acc += file.size;
        return acc;
      }, 0);
  
      if (totalSize > fileLimit) {
        alert('File is over 25MB!');
        return;
      }
  
      if (filesArr.length) {
        updateDropzoneFileList(dropZoneElement, filesArr);
      }
    })
  
    dropZoneElement.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZoneElement.classList.add('dropzone_over');
    })
  
    dropZoneElement.addEventListener('drop', (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      const filesArr = Array.from(files);
      const totalSize = filesArr.reduce((acc, file) => {
        acc += file.size;
        return acc;
      }, 0);
  
      if (totalSize > fileLimit) {
        alert('File is over 25MB!');
        dropZoneElement.classList.remove('dropzone_over');
        return;
      }
  
      if (filesArr.length) {
        inputElement.files = files;
        updateDropzoneFileList(dropZoneElement, filesArr);
      }
  
      dropZoneElement.classList.remove('dropzone_over');
    })
  
    dropzoneBox.addEventListener('reset', (e) => {
      let dropzoneFileMessage = dropZoneElement.querySelector('.dropzone__file-info');
  
      dropzoneFileMessage.innerHTML = 'No Files Selected';
    })
  
    dropzoneBox.addEventListener('submit', (e) => {
      e.preventDefault();
      const myFile = document.getElementById('upload-file');
      let dropzoneFileMessage = dropZoneElement.querySelector('.dropzone__file-info');
  
      
      const totalSize = Array.from(myFile.files).reduce((acc, file) => {
        acc += file.size;
        return acc;
      }, 0)
      
      if (totalSize > fileLimit) {
        alert('Files Are over 25MB!');
      } else {
        setTimeout(() => {
          dropzoneFileMessage.innerHTML = 'File Dropped Successfully!';
        }, 1000)
      }
  
      console.log('Files: ', myFile.files)
    })
  }

  // --------- Password Checker ---------
  const input = document.querySelector('.input-field');

  if (input) {
    const inputIcon = document.querySelector('.input-icon');
    const passwordStrength = document.querySelector('.progress-bar');
  
    inputIcon.addEventListener('click', (e) => {
      e.preventDefault();
  
      inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password'
          ? 'https://img.icons8.com/?size=100&id=100236&format=png&color=000000'
          : 'https://img.icons8.com/?size=100&id=60022&format=png&color=000000'
      );
  
      input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ? 'text' : 'password'
      );
    });
  
    input.addEventListener('keyup', function () {
      let pass = document.getElementById('password').value;
      checkStrength(pass);
    });
  
    const progressBarClasses = [
      'progress-bar_danger',
      'progress-bar_warning',
      'progress-bar_success',
    ];
  
    const passwordRule = (rule, ruleClass, strength) => {
      if (rule) {
        strength += 1;
        const img = document.querySelector(`.${ruleClass} img`);
        img.src = 'https://img.icons8.com/?size=100&id=UrUFNWAeX8fJ&format=png&color=40C057';
      } else {
        const img = document.querySelector(`.${ruleClass} img`);
        img.src = 'https://img.icons8.com/?size=100&id=AQB4eCetDiY2&format=png&color=FA5252';
      }
      return strength;
    };
  
    const handlePasswordStrengthClasses = (className, style) => {
      const classesToRemove = progressBarClasses.filter((barClass) => {
        return barClass !== className;
      });
  
      classesToRemove.forEach((barClass) => {
        passwordStrength.classList.remove(barClass);
      });
  
      passwordStrength.classList.add(className);
      passwordStrength.style = style;
    };
  
    function checkStrength(password) {
      let strength = 0;
  
      strength = passwordRule(
        password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/),
        'low-upper-case',
        strength
      );
  
      strength = passwordRule(password.match(/([0-9])/), 'one-number', strength);
  
      strength = passwordRule(
        password.match(/([!,%,&,@,#,$,^,*,?,_,~])/),
        'one-special-char',
        strength
      );
  
      strength = passwordRule(password.length > 7, 'eight-character', strength);
  
      if (strength < 2) {
        handlePasswordStrengthClasses(progressBarClasses[0], 'width: 10%');
      } else if (strength == 3) {
        handlePasswordStrengthClasses(progressBarClasses[1], 'width: 60%');
      } else if (strength == 4) {
        handlePasswordStrengthClasses(progressBarClasses[2], 'width: 100%');
      }
    }
  }

  // --------- Drag and Drop ---------
  const teamMembers = document.getElementById('team-members');

  if (teamMembers) {
    new Sortable(teamMembers, {
      group: 'shared',
      animation: 150,
      chosenClass: 'team-member-chosen',
      dragClass: 'team-member-drag',
    });
  
    const myTeam = document.getElementById('my-team');
  
    new Sortable(myTeam, {
      group: 'shared',
      animation: 150,
      chosenClass: 'team-member-chosen',
      dragClass: 'team-member-drag',
    });
  }

  // --------- Sidebar ---------
  const expandBtn = document.querySelector('.expand-btn');

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      document.body.classList.toggle('collapsed');
    });
  
    const allLinks = document.querySelectorAll('.sidebar-links a');
  
    allLinks.forEach((elem) => {
      elem.addEventListener('click', function () {
        const hrefLinkClick = elem.href;
  
        allLinks.forEach((link) => {
          if (link.href == hrefLinkClick) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
  }

  // --------- Tabs ---------
  const tabsTriggers = document.querySelectorAll('.js-tab');

  if (tabsTriggers) {
    tabsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const id = this.getAttribute('data-tab');
        const content = document.querySelector('.js-tab-content[id="' + id + '"]');
        const allTriggers = document.querySelectorAll('.js-tab');
        const activeTriggers = document.querySelectorAll(`.js-tab[data-tab=${id}]`);
        const activeContent = document.querySelector('.js-tab-content.is-active');
        const slider = document.querySelector('.tabs-slider');

        if (allTriggers) {
          allTriggers.forEach(function (item) {
            item.classList.remove('is-active');
          })
        }

        if (activeTriggers) {
          activeTriggers.forEach(function (item) {
            item.classList.add('is-active');
          })
        }

        if (activeContent) {
          activeContent.classList.remove('is-active');
          content.classList.add('is-active');
        }

        slider.style.transform = `translateX(${this.getAttribute('data-translate-value')}%)`
      });
    });
  }
})