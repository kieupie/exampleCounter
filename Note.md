# Component trong react re-render khi:
- props truyen vao tu component cha bi thay doi 
- state ben trong component bi thay doi

Khi mot component bi re-render thi toan bo code trong component do phai chay lai tu dau

# vi du
Xet vi du tren:
- khi click button increment/decrement => lam thay doi count (state) => component App bi re-render
    + Thuc hien incre/decre count
    + Thuc hien tinh lai Fibonacci (khong can thiet) vi Fibonacci(n) voi n xac dinh luon cho ra cung mot ket qua
- khi click button va thuc hien re-render nhu tren, UI se bi delay(lag) vi phai re-render expensive function Fibonacci tren (khong can thiet)

# can ap dung ky thuat Memorization

# useMemo
cache ket qua tra ve cua mot funtion sau khi function do duoc thuc thi 

# useCallback
cache dinh nghia cua mot function va khong thuc thi function do


- Khi su dung useCallback can ket hop voi React.memo (higher order component, de boc cac component con=> de component con khong bi re-render component khi nhan vao props giong nhau)
VD: Boc React.memo o Form de ngan re-render form neu nhu tham so dau vao giong nhau, Form luon nhan tham so la total va ta dang setTotal la 10 => khi cap nhat state tu component App cha khong lam cho component con Form bi re-render

- Mac du da su dung React.memo nhung khi truyen vao mot function submitForm thi component con Form van re-render
Vi doi voi nhung kieu du lieu nhu: function, array, object thi khi thuc hien "so sanh" thuong su dung API la "Object.is()" de so sanh giua hai gia tri la giong/khau nhau
    + Va o day, React.memo dang dung Object.is() de kiem tra 2 parameter la submitForm va data co giong voi gia tri cua lan render truoc do khong. Mac du, content cua component con khong thay doi, nhung van bi re-render??
    + Vi khi thuc hien so sanh bang Object.is() ~~ thuc hien phep "so sanh tham chieu"
    Khi Component App cha re-render thi cung thuc hien lai function submitForm (nhung voi mot dia chi vung nho moi)
    => so sanh tham chieu (hai dia chi vung nho giong/khac nhau?)
    => va o day function submitForm (mot dia chi vung nho moi), mac du content van la arlet('Form is submitted')
    => Object.is() thay co su thay doi o vung nho
    => Nen component con re-render khong can thiet
==> Can su dung them useCallback de giai quyet truong hop tren, neu co function truyen vao qua props

