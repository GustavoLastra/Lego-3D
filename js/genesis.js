
$('scene').append('<Background skyColor="0.05 0.05 0.1"/>');
//Horizontal Fußweg
$('scene').append('<Transform id="f1" translation="0 1.45 .05" scale="3 0.1 1"  />');
$('#f1').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="f2" translation="0 -1.45 .05" scale="3 0.1 1"  />');
$('#f2').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="f3" translation="0 2.55 .05" scale="3 0.1 1"  />');
$('#f3').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="f4" translation="0 -2.55 .05" scale="3 0.1 1"  />');
$('#f4').append('<Inline url="x3d/fussweg.x3d" />');

//Vertical Fußweg
$('scene').append('<Transform id="vf1" translation="1.45 0 .05" scale="3 0.1 1" rotation="0 0 1 1.5708" />');
$('#vf1').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="vf2" translation="-1.45 0 .05" scale="3 0.1 1" rotation="0 0 1 1.5708" />');
$('#vf2').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="vf3" translation="2.55 0 .05" scale="3 0.1 1" rotation="0 0 1 1.5708" />');
$('#vf3').append('<Inline url="x3d/fussweg.x3d" />');
$('scene').append('<Transform id="vf4" translation="-2.55 0 .05" scale="3 0.1 1" rotation="0 0 1 1.5708" />');
$('#vf4').append('<Inline url="x3d/fussweg.x3d" />');

//Grass vertical
$('scene').append('<Transform id="vg1" translation="3 0 0" scale="1 3 1" />');
$('#vg1').append('<Inline url="x3d/grass.x3d" />');
$('scene').append('<Transform id="vg2" translation="-3 0 0" scale="1 3 1" />');
$('#vg2').append('<Inline url="x3d/grass.x3d" />');

//Grass horizonal
$('scene').append('<Transform id="hg1" translation="0 3 0" scale="3 1 1" />');
$('#hg1').append('<Inline url="x3d/grass.x3d" />');
$('scene').append('<Transform id="hg2" translation="0 -3 0" scale="3 1 1" />');
$('#hg2').append('<Inline url="x3d/grass.x3d" />');

//Vertical streets
$('scene').append('<Transform id="vs1" translation="-2 3 0" rotation="0 0 1 1.5708" />');
$('#vs1').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs2" translation="-2 1 0" rotation="0 0 1 1.5708" />');
$('#vs2').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs3" translation="-2 0 0" rotation="0 0 1 1.5708" />');
$('#vs3').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs4" translation="-2 -1 0" rotation="0 0 1 1.5708" />');
$('#vs4').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs5" translation="-2 -3 0" rotation="0 0 1 1.5708" />');
$('#vs5').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs6" translation="2 3 0" rotation="0 0 1 1.5708" />');
$('#vs6').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs7" translation="2 1 0" rotation="0 0 1 1.5708" />');
$('#vs7').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs8" translation="2 0 0" rotation="0 0 1 1.5708" />');
$('#vs8').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs9" translation="2 -1 0" rotation="0 0 1 1.5708" />');
$('#vs9').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="vs10" translation="2 -3 0" rotation="0 0 1 1.5708" />');
$('#vs10').append('<Inline url="x3d/street.x3d" />');

//Horizontal streets
$('scene').append('<Transform id="hs1" translation="-1 2 0" />');
$('#hs1').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs2" translation="0 2 0" />');
$('#hs2').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs3" translation="1 2 0" />');
$('#hs3').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs4" translation="-1 -2 0" />');
$('#hs4').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs5" translation="0 -2 0" />');
$('#hs5').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs6" translation="1 -2 0" />');
$('#hs6').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs7" translation="-3 2 0" />');
$('#hs7').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs8" translation="3 2 0" />');
$('#hs8').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs9" translation="3 -2 0" />');
$('#hs9').append('<Inline url="x3d/street.x3d" />');
$('scene').append('<Transform id="hs10" translation="-3 -2 0" />');
$('#hs10').append('<Inline url="x3d/street.x3d" />');

//crossroads
$('scene').append('<Transform id="cross1" translation="-2 2 0" />');
$('#cross1').append('<Inline url="x3d/crossroad.x3d" />');
$('scene').append('<Transform id="cross2" translation="2 2 0" />');
$('#cross2').append('<Inline url="x3d/crossroad.x3d" />');
$('scene').append('<Transform id="cross3" translation="-2 -2 0" />');
$('#cross3').append('<Inline url="x3d/crossroad.x3d" />');
$('scene').append('<Transform id="cross4" translation="2 -2 0" />');
$('#cross4').append('<Inline url="x3d/crossroad.x3d" />');


//house
$('scene').append('<Transform id="wh1" scale=".8 .4 .5" translation="-0.5 -.9 1" />');
$('#wh1').append('<Inline url="x3d/whouse.x3d" />');

$('scene').append('<Transform id="bh1" scale=".3 .3 .3" translation="1 1 1" rotation="0 0 1 1.5708" />');
$('#bh1').append('<Inline url="x3d/bh.x3d" />');

$('scene').append('<Transform id="bh2" scale=".6 .4 .4" translation="-1 .9 1" rotation="0 0 1 4.7124"/>');
$('#bh2').append('<Inline url="x3d/bh2.x3d" />');

$('scene').append('<Transform id="wh2" scale=".6 .4 .4" translation="0 .9 1" rotation="0 0 1 3.1416"/>');
$('#wh2').append('<Inline url="x3d/wh2.x3d" />');
//Office
$('scene').append('<Transform id="o1" scale="1 .8 2" translation=".9 -.9 1.5" />');
$('#o1').append('<Inline url="x3d/office.x3d" />');

//Floor

$('scene').append('<Transform id="fl" scale="3 3 1" translation="0 0 0" />');
$('#fl').append('<Inline url="x3d/floor.x3d" />');
