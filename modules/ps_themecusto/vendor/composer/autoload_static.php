<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf01d9ea6a19000a1b3d4378be4f2343b
{
    public static $classMap = array (
        'AdminPsThemeCustoAdvancedController' => __DIR__ . '/../..' . '/controllers/admin/AdminPsThemeCustoAdvanced.php',
        'AdminPsThemeCustoConfigurationController' => __DIR__ . '/../..' . '/controllers/admin/AdminPsThemeCustoConfiguration.php',
        'ThemeCustoRequests' => __DIR__ . '/../..' . '/classes/ThemeCustoRequests.php',
        'ps_themecusto' => __DIR__ . '/../..' . '/ps_themecusto.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitf01d9ea6a19000a1b3d4378be4f2343b::$classMap;

        }, null, ClassLoader::class);
    }
}
