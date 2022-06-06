<?php

$f = fopen('data.txt', 'w');
fwrite($f, $_GET['content']);
fclose($f);

echo 'Comment saved';
?>