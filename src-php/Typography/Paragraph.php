<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;

final class Paragraph implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $utilityOptions;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UtilitiesOption[] $utilityOptions
     */
    public function __construct($children, array $utilityOptions)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
    }

    public function render(): string
    {
        return '<p class="' . $this->utilityOptions . '">' . ArrayRenderer::render($this->children) . '</p>';
    }

}
