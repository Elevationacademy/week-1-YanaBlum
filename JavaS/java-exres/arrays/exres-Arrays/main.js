

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let gense2 = [...genes]

const where = gense2.indexOf("RLF")
const where2 = gense2.indexOf("CRYZ")

 gense2.splice(where , 1 , "CRYZ" )
 gense2.splice(where2 , 1 , "RLF" )
 gense2.splice(3 , 1 )
gense2.push("AZIN2" , "AZIN2")
gense2.unshift("FXT")

console.log(gense2)


