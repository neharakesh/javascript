const insert=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`<div class='color'>
  </div>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "? 'space':e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>`
})