(function () {
    CKEDITOR.plugins.add('fileactions_save', {
        requires: 'dialog',
        icons: 'fileactions_save',
        init: function (editor) {
            editor.ui.addButton('Fileactions_save', {
                label: 'Save',
                command: 'fileactions_save',
                toolbar: 'insert'
            });

            editor.addCommand( 'fileactions_save', new CKEDITOR.dialogCommand( 'fileactions_save', {
            } ) );

            editor.ui.addButton && editor.ui.addButton( 'fileactions_save', {
                label: editor.lang.smiley.toolbar,
                command: 'fileactions_save',
                toolbar: 'insert,50'
            } );

            // Register the dialog.
            CKEDITOR.dialog.add( 'fileactions_save', this.path + 'dialogs/fileactions_save.js' );

        }
    });
})();




