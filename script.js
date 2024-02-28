document.getElementById('alarmForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const hours = parseInt(document.getElementById('hours').value);
  const minutes = parseInt(document.getElementById('minutes').value);
  const ampm = document.getElementById('ampm').value;

  let alarmTime = new Date();
  alarmTime.setHours(hours + (ampm === 'pm' && hours < 12 ? 12 : 0));
  alarmTime.setMinutes(minutes);
  alarmTime.setSeconds(0);
  alarmTime.setMilliseconds(0);

  const currentTime = new Date();
  const timeDiff = alarmTime - currentTime;

  if (timeDiff <= 0) {
    alert('Please select a future time for the alarm.');
    return;
  }
  document.getElementsByClassName('output')[0].innerText = 'Alarm Set'

  setTimeout(() => {
    document.getElementById('alarmSound').play();
  }, timeDiff);

  document.getElementById('clearAlarm').addEventListener('click', function() {
    document.getElementById('alarmSound').pause();
    document.getElementById('alarmSound').currentTime = 0;
    document.getElementsByClassName('output')[0].innerText = 'Alarm Cleared'
  });
});
