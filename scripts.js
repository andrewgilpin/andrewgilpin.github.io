/* ================================= 
  On Click Goodies
==================================== */
        document.getElementById('formSubmit').onclick = result;
        document.getElementById('submitReverse').onclick = reverse;
        document.getElementById('submitTrace').onclick = trace;
  	document.getElementById('submitForwarding').onclick = forwarding;
	document.getElementById('submitAlcatel').onclick = alcatel;
	document.getElementById('formClear').onclick = clear;
               
/* ================================= 
  Functions
==================================== */

        function result(event) {
        window.scrollTo(0,document.body.scrollHeight);
        event.preventDefault();
        var aside = document.getElementById( 'aside').value;
        var zside = document.getElementById( 'zside').value;
        var pseudowire = document.getElementById('pseudowire').value;
        console.log(aside, zside, pseudowire);
        document.querySelector('output').innerHTML = 'ping mpls pseudowire ' + zside + ' ' + pseudowire + ' source ' + aside + ' size 1500 repeat 100 interval 10';
        }

        function reverse(event) {
        window.scrollTo(0,document.body.scrollHeight);
        event.preventDefault();
        var aside = document.getElementById('aside').value;
        var zside = document.getElementById('zside').value;
        var pseudowire = document.getElementById('pseudowire').value;
        console.log(aside, zside, pseudowire);
        document.querySelector('output').innerHTML = 'ping mpls pseudowire ' + aside + ' ' + pseudowire + ' source ' + zside + ' size 1500 repeat 100 interval 10';
        }

        function trace(event) {
        window.scrollTo(0,document.body.scrollHeight);
        event.preventDefault();
        var aside = document.getElementById('aside').value;
        var zside = document.getElementById('zside').value;
        console.log(aside, zside);
        document.querySelector('output').innerHTML = 'traceroute mpls ipv4 ' + zside + ' ' + ' source ' + aside;
        }

        function forwarding(event) {
        window.scrollTo(0,document.body.scrollHeight);
        event.preventDefault();
        var zside = document.getElementById('zside').value;
        console.log(zside);
        document.querySelector('output').innerHTML = 'show mpls forwarding prefix ' + zside + '/32 ';
        }

        function alcatel(event) {
        window.scrollTo(0,document.body.scrollHeight);
        event.preventDefault();
        var aside = document.getElementById('aside').value;
        var zside = document.getElementById('zside').value;
        document.querySelector('output').innerHTML = 'ping rapid ' + aside + ' source ' + zside + ' size 1500 count 100 interval 10'
        }

        function clear(event) {
        document.querySelector('output').innerHTML = ' ';
        }
