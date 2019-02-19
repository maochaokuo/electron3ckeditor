(function () {
    CKEDITOR.plugins.add('fileactions_open', {
        requires: 'dialog',
        icons: 'fileactions_open',
        init: function (editor) {
            editor.ui.addButton('Fileactions_open', {
                label: 'Open',
                command: 'fileactions_open',
                toolbar: 'insert'
            });

            editor.addCommand( 'fileactions_open', new CKEDITOR.dialogCommand( 'fileactions_open', {
            } ) );

            editor.ui.addButton && editor.ui.addButton( 'fileactions_open', {
                label: editor.lang.smiley.toolbar,
                command: 'fileactions_open',
                toolbar: 'insert,50'
            } );

            // Register the dialog.
            CKEDITOR.dialog.add( 'fileactions_open', this.path + 'dialogs/fileactions_open.js' );

        }
    });
})();




