/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
    CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';
CKEDITOR.plugins.addExternal('nbsp', 'plugins/nbsp/', 'plugin.js');
CKEDITOR.plugins.addExternal('fileactions_open', 'plugins/fileactions_open/', 'plugin.js');
CKEDITOR.plugins.addExternal('fileactions_save', 'plugins/fileactions_save/', 'plugin.js');
// CKEDITOR.plugins.addExternal('codesnippet', 'plugins/codesnippet/', 'plugin.js');


CKEDITOR.editorConfig = function( config ) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
    config.language = 'en';
    config.entities = false;
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc';
    config.extraPlugins = 'fileactions_open,fileactions_save,nbsp,pastebase64';

    config.codeSnippet_theme = 'atom-one-dark';
    config.codeSnippet_languages = {
        arduino: 'Arduino',
        basic: 'Basic',
        cpp: 'C++',
        cs: 'C#',
        html: 'HTML',
        java: 'Java',
        javascript: 'JavaScript',
        json: 'JSON',
        php: 'PHP',
        processing: 'processing',
        python: 'Python',
        verilog: 'Verilog',
        vhdl: 'VHDL',
        xml: 'XML'
    };

    config.skin = 'moono';
    config.format_tags = 'h2';
    config.enterMode = CKEDITOR.ENTER_BR;
    config.allowedContent = true;

    config.removePlugins = 'elementspath';
    config.resize_enabled = false;

    config.toolbar = 'my';

    config.toolbar_my = [
        ['Source', '-', 'Fileactions_open', 'Fileactions_save'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
        ['Undo', 'Redo', '-'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink', 'Anchor'],
        '/',
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
        ['Format', 'FontSize', 'TextColor', 'RemoveFormat'],

        ['Image', 'Table', 'HorizontalRule', 'Nbsp', 'SpecialChar', 'Embed', 'PageBreak']

    ];
    // %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};







CKEDITOR.on('dialogDefinition', function (ev) {
    if (ev.data.name == 'link') {
        ev.data.definition.getContents('target').get('linkTargetType')['default'] = '_blank';
    }
});







