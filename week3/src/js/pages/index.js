define(["axios"], (axios) => {
    const ps = document.querySelectorAll('.title p')
    const section = document.querySelector('.section')
    ps.forEach(item => {
        item.onclick = () => {
            if (item.innerHTML === '我的爱豆') {
                axios('/getData').then((result) => {
                    const data = result.data.data;


                    section.innerHTML = data.map((item) => {
                        return `<div class="big">
                    <div class="img"></div>
                    <span>${item.UserName}</span>
                </div>`
                    }).join('')
                })
            } else if (item.innerHTML === '饭圈头条') {
                axios('/getData').then((result) => {
                    const data = result.data.data;
                    section.innerHTML = data.map((item) => {
                        return `<div class="big">
                    <div class="img"></div>
                    <span>${item.Name}</span>
                </div>`
                    }).join('')
                })
            } else {
                section.innerHTML = "抱歉，暂无信息"
            }
        }
    })

})