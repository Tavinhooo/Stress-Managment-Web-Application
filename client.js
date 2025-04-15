
  function switchTab(clickedTab) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');
  
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('howFeelSection').style.display = 'none';
    document.getElementById('relaxationSection').style.display = 'none';
    document.getElementById('relaxation2Section').style.display = 'none';
    document.getElementById('showYourselfSection').style.display = 'none';

    const tabName = clickedTab.textContent.trim();
    if (tabName === "Home page") {
      document.getElementById('homeSection').style.display = 'flex';
    } else if (tabName === "How do you feel") {
      document.getElementById('howFeelSection').style.display = 'flex';
    } else if (tabName === "Relaxation") {
      document.getElementById('relaxationSection').style.display = 'flex';
    } else if (tabName === "Relaxation 2") {
      document.getElementById('relaxation2Section').style.display = 'flex';
    }else if (tabName === "Show Yourself") {
        document.getElementById('showYourselfSection').style.display = 'flex';
        startWebcam();
      }
  }


  const container = document.getElementById('breatheContainer');
  const text = document.getElementById('breatheText');
  
  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;
  
  function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'circle-container grow';
  
    setTimeout(() => {
      text.innerText = 'Hold';
  
      setTimeout(() => {
        text.innerText = 'Breathe Out!';
        container.className = 'circle-container shrink';
      }, holdTime);
    }, breatheTime);
  }
  
  setInterval(breathAnimation, totalTime);  

function startWebcam() {
    const webcam = document.getElementById('webcam');
    if (!webcam) return;
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        webcam.srcObject = stream;
      })
      .catch((error) => {
        console.error("Webcam access denied or unavailable", error);
      });
  }