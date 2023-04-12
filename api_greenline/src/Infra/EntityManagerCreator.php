<?php

namespace Greenline\Infra;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\ORMSetup;
use Doctrine\ORM\Tools\Setup;
use Doctrine\DBAL\Platforms\SqlitePlatform;

class EntityManagerCreator
{
    public function getEntityManager(): EntityManagerInterface
    {
        $paths = [__DIR__ . '/../Model'];
        $isDevMode = false;

        $sqlPlatform = new SqlitePlatform();
        $options = [
            'driver' => 'pdo_sqlite',
            'path' => __DIR__.'/../../database/greenline.sqlite',
            'platform' => $sqlPlatform,
        ];

        $config = ORMSetup::createAnnotationMetadataConfiguration(
            $paths,
            $isDevMode
        );
        return EntityManager::create($options, $config);
    }
}