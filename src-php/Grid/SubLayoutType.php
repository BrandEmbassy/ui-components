<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class SubLayoutType extends Enum
{
    public const FLEX = 'App__Flex';
    public const STATIC = 'App__Static';
}
