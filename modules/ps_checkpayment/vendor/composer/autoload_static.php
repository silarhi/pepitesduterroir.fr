<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit41d5ee573fed781737b79606da6ffbb4
{
    public static $classMap = array (
        'Ps_Checkpayment' => __DIR__ . '/../..' . '/ps_checkpayment.php',
        'Ps_CheckpaymentPaymentModuleFrontController' => __DIR__ . '/../..' . '/controllers/front/payment.php',
        'Ps_CheckpaymentValidationModuleFrontController' => __DIR__ . '/../..' . '/controllers/front/validation.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit41d5ee573fed781737b79606da6ffbb4::$classMap;

        }, null, ClassLoader::class);
    }
}
