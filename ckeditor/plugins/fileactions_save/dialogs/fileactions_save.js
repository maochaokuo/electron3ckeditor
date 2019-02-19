CKEDITOR.dialog.add( 'fileactions_save', function() {
    return {
        title: 'Save',
        minWidth: 400,
        minHeight: 150,
        contents: [
            {
                id: 'tab1',
                elements: [
                    {
                        type: 'html',
                        html: '' +
                            '<b style="font-weight: bold">Filename to Save As:</b>' +
                        '<br>' +
                        '<br>' +
                            '<input id="inputFileNameToSaveAs" autofocus class="cke_dialog_ui_input_text" value="">' +
                        '<br>' +
                            '<a class="cke_dialog_ui_button cke_dialog_ui_button_ok" onclick="saveTextAsFile()">' +
                            '<span class="cke_dialog_ui_button" style="color:#fff">Save text to file</span>' +
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
