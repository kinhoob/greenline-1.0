<?php

use Doctrine\DBAL\Platforms\SqlitePlatform;

return [
    'driver' => 'pdo_sqlite',
    'path' => __DIR__.'/../database/greenline.sqlite',
    'platform' => new SqlitePlatform()
];