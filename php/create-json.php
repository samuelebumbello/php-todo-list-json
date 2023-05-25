<?php

$list = [
  [
    "text" => "Andare al mare",
    "done" => false
  ],
  [
    "text" => "Sistemare casa",
    "done" => false
  ],
  [
    "text" => "Allenarsi",
    "done" => false
  ],
  [
    "text" => "Studiare Inglese",
    "done" => false
  ],
  [
    "text" => "Andare dal fisioterapista",
    "done" => false
  ],
];


$json_string = json_encode($list);
file_put_contents('todo-list.json', $json_string);