<?php

use Doctrine\DBAL\Platforms\SqlitePlatform;

return [
    'driver' => 'pdo_sqlite', /*ao invés de pdo_sqlite seria MySql */
    'path' => __DIR__.'/../database/greenline.sqlite',
    'platform' => new SqlitePlatform()
];