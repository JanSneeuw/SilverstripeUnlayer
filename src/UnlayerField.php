<?php

namespace Violet88\SilverstripeUnlayer;

use SilverStripe\Forms\FormField;

class UnlayerField extends FormField
{

    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    private $data;

    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($name, $title, $value);
        $this->data = $value;
    }

    protected $schemaComponent = 'UnlayerField';

}
