function keycontacts() {
  document.getElementById('key-contacts-show').style.display = 'block';
  document.getElementById('message').innerHTML = '<center><h1>Contacts</h1></center><br /><br /><p><u>&#62;Faculty Advisor: </u>Dr. Uttam Sharma<br><a href=&#34;mailto:druttamsharma1971@gmail.com&#34;>druttamsharma1971@gmail.com</a>- +91 9826212353</p><br /><p><u>&#62;Faculty Advisor: </u>Dr. Roopa Shinde<br><a href=&#34;mailto:satyamymail@gmail.com&#34;>satyamymail@gmail.com</a>- +91 8818889883</p><br /><p><u>&#62;Director General: </u>Swapnil khandekar<br><a href=&#34;mailto:dg.svvvimun@gmail.com&#34;>dg.svvvimun@gmail.com</a>- +91 9179781156</p><br /><p><u>&#62;Charge D\' Affairs: </u>Parth Goyal<br><a href=&#34;mailto:Delegateaffairs_svvvimun@gmail.com&#34;>Delegateaffairs_svvvimun@gmail.com</a>- +91 9406600030</p><br /><p><u>&#62;Deputy Secratary General: </u>Harshita Gaadhe<br><a href=&#34;mailto:dsg.svvvimun@gmail.com&#34;>dsg.svvvimun@gmail.com</a>- +91 9009233383</p><br /><p><u>&#62;Dupty Director General: </u>Abhinav Nagani<br><a href=&#34;mailto:ddg.svvvimun@gmail.com&#34;>ddg.svvvimun@gmail.com</a>- +91 8989097362</p><br /><p><u>&#62;SVVVIMUN</u><br><a href=&#34;mailto:svvvimun2016@gmail.com&#34;>svvvimun2016@gmail.com</a></p>';
}

function closeOpenWindow() {
  document.getElementById('key-contacts-show').innerHTML = '<div onclick="closeOpenWindow()" id="backButton">&#171;</div><br /><div id="message"></div>';
  document.getElementById('key-contacts-show').style.display = "none";
}
