<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Radio;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class Radio implements UiComponent
{
    public const CHECKED = true;
    public const NOT_CHECKED = false;

    /**
     * @var string
     */
    private $label;

    /**
     * @var string
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $value;

    /**
     * @var bool
     */
    private $checked;

    /**
     * @var bool
     */
    private $disabled;


    public function __construct(
        string $label,
        string $id,
        string $name,
        string $value,
        bool $checked,
        bool $disabled = false
    ) {
        $this->label = $label;
        $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->checked = $checked;
        $this->disabled = $disabled;
    }


    public function render(): string
    {
        $checkedAsHtml = $this->checked ? ' checked="checked"' : '';
        $disabled = $this->disabled ? ' disabled' : '';

        $escapedId = StringEscaper::escapeHtmlAttribute($this->id);
        StringEscaper::validateInputName($this->name);

        $inputHtmlTemplate = '<input' . $disabled . ' type="radio" id="%s" name="%s" value="%s"%s />';
        $inputHtml = sprintf(
            $inputHtmlTemplate,
            $escapedId,
            $this->name,
            StringEscaper::escapeHtmlAttribute($this->value),
            $checkedAsHtml
        );

        $onclick = sprintf('onclick="document.getElementById(\'%s\').click();"', $escapedId);

        $html = sprintf('<div class="Radio__RadioContent" %s>', $onclick);
        $html .= '<div class="Radio__Radio">'
            . $inputHtml
            . sprintf('<label for="%s"></label>', $escapedId)
            . '</div>';
        $html .= sprintf('<div class="Radio__Label">%s</div>', StringEscaper::escapeHtml($this->label));
        $html .= '</div>';

        return $html;
    }
}
