<%@ page contentType="text/html" pageEncoding="UTF-8" language="java"%>
<html>
<head>
  <title>pip_lab_2</title>
  <meta charset="UTF-8">
  <script type="text/javascript">
      <%@include file="/WEB-INF/index.js"%>
  </script>
  <style type="text/css">
    <%@include file="/WEB-INF/index.css"%>
  </style>
</head>
<body>
<div id="head">
  Сергачев Данила
  Группа P3217
  Вариант ?
</div>
<div id="body">
    <form action="/lab2_war_exploded/controller" id="sender" method="get" onsubmit="return validate();">
    <table>
      <tr>
        <td>X:  <input id="x_value" type="text" required name="x_value" class="indent" placeholder="-3..5"></td>
      </tr>
      <tr>
        <td>Y:  <input id="y_value" type="text" required name="y_value" class="indent" placeholder="-5..3"></td>
      </tr>
      <tr>
        <td id="error"></td>
      </tr>
    </table>
    <input type="submit" value="Send">
  </form>
</div>
</body>
</html>