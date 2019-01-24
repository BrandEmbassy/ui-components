<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Align;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Cell implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var Align|null
     */
    private $align;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Align|null $align
     */
    public function __construct($children, ?Align $align = null)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->align = $align;
    }

    public function render(): string
    {
        $styles = $this->align ? $this->align->getStyles()->getHtmlAttribute() : '';

        return '<td' . $styles . '>' . ArrayRenderer::render($this->children) . '</td>';
    }

}
