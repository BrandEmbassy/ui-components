<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use function array_map;
use function array_reduce;

final class ArrayRenderer
{
    /**
     * @param UiComponent[]|string[] $components
     * @param string                 $separator
     * @return string
     */
    public static function render(array $components, string $separator = ''): string
    {
        $rendered = array_map(
            function ($component): string {
                if ($component instanceof UiComponent) {
                    return $component->render();
                }

                return StringEscaper::escapeHtml($component);
            },
            $components
        );

        $reduced = array_reduce(
            $rendered,
            function (string $carry, string $item) use ($separator): string {
                $itemsSeparator = $carry !== '' ? $separator : '';

                return $carry . $itemsSeparator . $item;
            },
            ''
        );

        return $reduced;
    }
}
