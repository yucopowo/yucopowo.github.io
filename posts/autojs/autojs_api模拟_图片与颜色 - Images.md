# autojs_api模拟_图片与颜色 - Images

09:38:57.557/D: colors.red(4289379276) 170
09:38:57.557/D: colors.red('#AAFFFF') 170
09:38:57.558/D: colors.parseColor('#112233') -15654349
09:38:57.559/D: colors.parseColor('#FFFFFF') -1
09:38:57.559/D: colors.parseColor('#000000') -16777216
09:38:57.560/D: colors.BLACK -16777216
09:38:57.560/D: colors.RED -65536

```javascript {demo=autojs size=small}

console.log( 'colors.red(4289379276)', colors.red(4289379276) ); // 170
console.log( "colors.red('#AAFFFF')", colors.red('#AAFFFF') ); // 170

console.log( "colors.parseColor('#112233')", colors.parseColor('#112233') ); // -15654349


console.log( "colors.parseColor('#FFFFFF')", colors.parseColor('#FFFFFF') ); // -1
console.log( "colors.parseColor('#000000')", colors.parseColor('#000000') ); // -16777216

console.log( 'colors.BLACK', colors.BLACK ); // -16777216
console.log( 'colors.RED', colors.RED ); // -65536


```
