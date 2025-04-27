$(function() {

    $('.instance_id').hide();  // 隐藏所有
    $('.instance_id.room_1').show();  // 只显示 room_1

    $('.instance_selector').change(function(){
        var dataset = $('#instance-selector').val();

        $('.instance_id').hide();
        if (dataset === 'office_3') {
            $('.instance_id.office_3').show();
        } else if (dataset === 'office_1') {
            $('.instance_id.office_1').show();
        } else if (dataset === 'room_1'){
            $('.instance_id.room_1').show();
        } else if (dataset === 'scene0220_02'){
            $('.instance_id.scene0220_02').show();
        } else if (dataset === 'scene0592_01'){
            $('.instance_id.scene0592_01').show();
        } else if (dataset === 'scene0696_02'){
            $('.instance_id.scene0696_02').show();
        }
        console.log('.instance_id.' + dataset)
    });

    
    $('.semantic_id').hide();  // 隐藏所有
    $('.semantic_id.room_0').show();  // 只显示 room_1

    $('.semantic_selector').change(function(){
        var dataset = $('#semantic-selector').val();

        $('.semantic_id').hide();
        if (dataset === 'room_0') {
            $('.semantic_id.room_0').show();
        } else if (dataset === 'office_2') {
            $('.semantic_id.office_2').show();
        } else if (dataset === 'scene0030_02'){
            $('.semantic_id.scene0030_02').show();
        } else if (dataset === 'scene0673_04'){
            $('.semantic_id.scene0673_04').show();
        }
        console.log('.semantic_id.' + dataset)
    });



    
});
