function timsoconso1(n){
  x=n+"".length
  socantim=0
  kq=[]
  for(i=0;i<x;i++){
    kq[i]=Math.pow(10,x-1-i)
    socantim=socantim+kq[i]
  }
  return socantim
}
