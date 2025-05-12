$(function() {

    $('.optics').hide();  // 隐藏所有
    $('.optics.room_2').show();  // 只显示 room_2

    $('.optics_selector').change(function(){
        var dataset = $('#optics-selector').val();

        $('.optics').hide();
        if (dataset === 'office_3') {
            $('.optics.office_3').show();
        } else if (dataset === 'scene0059_00') {
            $('.optics.scene0059_00').show();
        } else if (dataset === 'scene0106_00'){
            $('.optics.scene0106_00').show();
        } else if (dataset === 'room_2') {
            $('.optics.room_2').show();
        }
        console.log('.optics.' + dataset)
    });

    
    $('.geometry').hide();  // 隐藏所有
    $('.geometry.scene0181_00').show();  // 只显示 scene0181_00

    $('.geometry_selector').change(function(){
        var dataset = $('#geometry-selector').val();

        $('.geometry').hide();
        if (dataset === 'scene0000_00') {
            $('.geometry.scene0000_00').show();
        } else if (dataset === 'scene0207_00') {
            $('.geometry.scene0207_00').show();
        } else if (dataset === 'scene0059_00'){
            $('.geometry.scene0059_00').show();
        } else if (dataset === 'scene0181_00') {
            $('.geometry.scene0181_00').show();
        }
        console.log('.geometry.' + dataset)
    });

    $('.semantic').hide();  // 隐藏所有
    $('.semantic.office_2').show();  // 只显示 office_2

    $('.semantic_selector').change(function(){
        var dataset = $('#semantic-selector').val();

        $('.semantic').hide();
        if (dataset === 'scene0059_00') {
            $('.semantic.scene0059_00').show();
        } else if (dataset === 'room_0') {
            $('.semantic.room_0').show();
        } else if (dataset === 'scene0181_00'){
            $('.semantic.scene0181_00').show();
        } else if (dataset === 'office_2') {
            $('.semantic.office_2').show();
        }
        console.log('.semantic.' + dataset)
    });

    
});
