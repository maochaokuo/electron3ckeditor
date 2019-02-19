CKEDITOR.dialog.add( 'fileactions_open', function() {
    return {
        title: 'Open',
        minWidth: 400,
        minHeight: 150,
        contents: [
            {
                id: 'tab1',
                elements: [
                    {
                        type: 'html',
                        html: '' +
                        '<b style="font-weight: bold">Select a file to open (.html, .txt):</b>' +
                        '<br>' +
                        '<br>' +
                        '<input type="file" class="cke_dialog_ui_input_text" id="fileToLoad">' +
                        '<br>' +
                            '<a class="cke_dialog_ui_button cke_dialog_ui_button_ok" onclick="loadFileAsText()">' +
                                '<span class="cke_dialog_ui_button" style="color:#fff">Load Selected File</span>' +
                            '</a>' +
                        ''
                    }
                ]
            }
        ],
        buttons: [ CKEDITOR.dialog.cancelButton ]
    };
} );

// %LEAVE_UNMINIFIED% %REMOVE_LINE%


//saveTextAsFile, loadFileAsText
