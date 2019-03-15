;(function(){

    const op = {
        "+" : (a,b)=>a+b,
        "-" :(a,b)=>a-b,
        "*":(a,b)=>a*b,
        "/":(a,b)=>a/b,
    }

    const jusitfy = {
        "+" : ([a,b])=>[a,b],
        "-" :([a,b])=>a>b?[a,b]:[b,a],
        "*":([a,b])=>[a,b],
        "/":([a,b])=>[a*b,b],
    }

    function Subject (level =1){
        this.num1 = 1;
        this.num2 = 1;
        this.levevl = level;

        this.operator = "+";
        this.result = 0

        this.next();

    }

    Subject.prototype.setOperator = function(opStr){
        this.operator = opStr;
        this.next();
    }

    Subject.prototype.toString = function(){
        return [this.num1,this.operator,this.num2,"=",this.result].join(" ");
    }

    Subject.prototype.getRandomNumber= function() {
        let level = this.levevl
        let min = Math.pow(10, level - 1)
        let max = Math.pow(10, level)
        return min + Math.floor(Math.random() * (max - min))
    },

    Subject.prototype.buildNums=function(){
        let num1 = this.getRandomNumber();
        let num2 = this.getRandomNumber();
        [num1,num2] = jusitfy[this.operator]([num1,num2])
        this.num1 = num1;
        this.num2 = num2;
    }

    Subject.prototype.next = function(){
        this.buildNums();
        this.buildResult();
    }

    Subject.prototype.buildResult = function(){
        let rs = 0
        if(op[this.operator]){
            rs =  op[this.operator](this.num1,this.num2);
        }
        this.result = rs;
    }
    window.Subject = Subject;
})(window)