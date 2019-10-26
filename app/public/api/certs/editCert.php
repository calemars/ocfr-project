<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'update Certifications set certificationName=?, certifyingAgency=?, expPeriod=? where certificationGuid=?'
);

$stmt->execute([
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['expPeriod'],
  $_POST['certificationGuid']
]);
