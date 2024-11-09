var speed=40; // lower number for faster
var flakes=20; // number of flakes

/***************************\
*Winter Drifting Snow Effect*
*(c)2006-14 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
\***************************/
var swide, shigh, sdown, sleft, boddie;
var dx=new Array();
var xp=new Array();
var yp=new Array();
var am=new Array();
var dy=new Array();
var flaky=new Array();
var flake_image=new Array();
flake_image[0]='iVBORw0KGgoAAAANSUhEUgAAAEgAAABTCAMAAAALIrEtAAADAFBMVEUAAADx/vr///rt/vn///f8'+
'//X///n7//T///j+//by//z///3s8+n0//z09u32+e/N19P///vv/vjw8+rv//r0///w9ezo7+nE'+
'2dR5hHzw//7C1NDd5Nxte3H8/Pbs/fzl7ObCzcVve3Lz8+l9tarG1dF5h37K1s/I083s8Of4+fHS'+
'3NP+/fVir6Fhtadu0MTp7OTEz8qSua/9+/Jlx7n5/PPo9vPC08zI2dNsqp92sKWhwbd1i4NvsKR+'+
'1MZrxbWxzMLq+vdiwbO86ens8u3i5t6Y0snD6emj2NGTnpqBk4zU4NmZwLeRvbOOua+z1tLf/v3Y'+
'///w+/e61tS92tjg8O7k6uK/0Mm7yMJ8hn1+l4+Eyb3P2dB6z8J7zsKx3du80s5fuq3R3di5zsfN'+
'1s5zqZ1yvrFzxbh/tKnZ3td+r6V72Mro//zj/frh6uba7Ora5+Tg6OCp3dd5n5WPr6aYp6HN3Nad'+
'0MaFzsEZKBxztan4//+lx751uK6Jua5rtalty7x20sSE2ct7wrdVqpzg9vTU5uS429qxyMLO7Oq/'+
'19OGwrhfcWiM1ch+vLGAuK9vlopor6SsycBVaV9jqZxjhHl7ua7//vhbrqB3vbNdpZjD3tx1yLu5'+
'4eDM4t/G7+/a4t1+w7jz+PCGr6WNxrt8r6Tc5d+b2s/W3tVsiICsv7miw7x3zL6P0MXv8Odslo13'+
'xbnc8e/K9/aNx7zI29jC4uKLw7pfe3B7uq5hmIxovK6dxr10sqhas6eGqKGt4+HQ//2BmpKbyMCT'+
'tayHtq5ppJjU3tuAqJ6BoZdrwLJsnpKHua+Ys6l3s6ZujoN739NtqZ2v2tfC9/WUx77l8u58q6Gj'+
'1MyRpJ6GsaiFtKthfHCZubCPtKqh49qD39LV8e6z6ee98O6u0Mumz8uSv7aAqJ6Tyb+Hy7+TvLOZ'+
'ubGQ3dGOxLlel46K5tZss6RRopPU9vX5/vqCrKOzw7ugubAcLiM4WUyJwLNpoJSdw7yExbeT1MpJ'+
'bWRuvrGHua1asaNpEoPoAAABAHRSTlMAqKioqKioqKioqKioqKioqKioqKioqKioA6ioqBCoqKio'+
'B6ioqBmoqKioqKioqKioqKioqKioqKioqKgoqKaoqKioqKioqKimDCKoqKioqKioqKioqKioqAE1'+
'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';

flake_image[1]='iVBORw0KGgoAAAANSUhEUgAAAEgAAABTCAMAAAALIrEtAAADAFBMVEUAAADR+ff7+fmt/fDQ9/PV'+
'+vfM9/PL+fay+vDN+fan//L////L//rL+vOl/vC6+fDR/vSu//L+/PzM//6k+e6O4NW1/fK1+vGt'+
'+e+a//HG/vjD6eHR//u7/PK1+u+4//fY/PSD1Mmp//bB//mA0cS9/vexsrQ+TEG+2dJywLOE2s2y'+
'/PJ3xbp6vrPC+/XS+fK1//bK8Oe84dmW3dF84dKH7+GZ//jL/fYcKB7L+vGj39Wk2dGt//qg+euV'+
'/ezD//2QwrrW+vHc/vpiva6i//OD5djW//yazcWy//bh7+S049qP18t01MfR9+9hw7WO9um36eS+'+
'8eyv6OGm5d03Qjed2M+/0cur29SI0sdgtqh7yb2W6t6G39POzc5ZoJPf3d2Tl5Sf0sq1//7f9eye'+
'8+fE7+VVk4h42cqP8ONv0MLh+/O7//qp+u8SJRm18Omt8Ois4dnG8+nO9Oq22NCa49iM59uL3dGZ'+
'7uPB5txmq5/39fZTraDp5ui69O7Cw8NklI2Py8FWhX1zg36m7+XJ9OyFxbx47eO1z8lxxbhn08eF'+
'9+mHzMBzuq6B6txouazh//qttbK9//7D3tfA9/A1Sz7n/vWJtK0ACgWS49rx8PHKxsrI//6boqGY'+
'xb51qaBbcGgyW09PgXZQhHi66N9ot6x6zcFoxrnL9uyR//XK1dBoyLtq1ctv5Njw/PK4vr2Mu7SH'+
'mZYWLSJha2Vlm5HK6+Of6t9nw7R359k8em6vu7YdKh+EvrZigHZ/tq7j4uGPwro9bmEpVUYZOi6+'+
'u75Xn5Z4oplLkoRrvLFhvrJas6VBlYZafHPX09XS7ui1x8AWNy43VEplj4dwm5J+pJ5jlos5ZllR'+
'opaVpKLU2tibsK4xVUZhsKbM3dbV5d1MoJNr29BhopVHh3xvtahKmoxylYyjzcaSw7t+wLR9r6gI'+
'DQdxjIWasq89bmOvycCH//GAq6WY1MxljYh4wLVdnZEtamBxqKBYva+C0MRUbmKOsawyWE8lTEVw'+
'nZVt0Mmr1M2VvLBzHRV4AAABAHRSTlMAra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2t'+
'ra2trQUJra2tra2tra2tra2tra2trRGtrautra2tra2tra2tra2tra2tq62sra2tra0DrK2trK2t'+
'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'+
'RU5ErkJggg==';

flake_image[2]='iVBORw0KGgoAAAANSUhEUgAAAEgAAABTCAMAAAALIrEtAAADAFBMVEUAAAD27f/N1O/19PnT1/H3'+
'7f/Z2/TJ0e3R1vDK0u3q7fjp6/jP1u/X2vPs5v3V2fLf3vf19Pja3PXx8Pfq5/rp5PvK1O7i4PjI'+
'0u3Gz+zR1vDL0+7z8vjO1u/06//K0+7r7Pbz9P3x6f7I0e1Lb7vT2fHT2vHV3PLj4fnm4/rK0+71'+
'8/rM1e/K0e3Fz+wZR6fM0+7c3Pbz8v3H0Oze5PUEMpzH0OzV1/LK0u3K0+3G0OzN1O7q7Pjn6fUF'+
'NZ3q6/np6fjz6/3I0e3I0u3d4vXa4/Tv7vfq7PjO1+/R2fG6x+fY3vMnUazk6fjP1e/Y4PIVP6ID'+
'L5rT2vLr7Pbx8f3s7PfH0OzM1e8YRqfY4PTW3vI7YrTY3vO/yukaRqcDM5zR2PDr5/rP0/DJ0e3U'+
'3PHU3PHd5fXL1e/L1e4LOZ/q6/jk6PXN1e8CM5zj5ffEzetohMVEabjh4ffd3fbU3PLv5/3d4/bb'+
'4PTCzuvN1O/s5/rS2/Hm5/bFz+zR2fE0XLHS2vHY3fLq7PYFNp49ZbXS2PHb3/Xl6fjo5vnb4PTD'+
'zevr7frm6fXj5vdEabiEmtDT2fLS2fDb3vRQc73V2/Ha4vPm6fXDzustVa4sVq+No9RWeL/m5PiO'+
'o9XV2vKsu+LX3PJ4k87q6/ng4Pf48v3v8PnI0+3h5vaXqthefcLO1u/i6Paktd4mUau+yOi+y+qX'+
'q9jx6/z+9//F0OzDzuuWq9m4xeZyjclae8Lk5PhdfMGyv+To4/nW3fP09PrQ1/CBmM9phse5xeel'+
'tt7W2/L89P4CMp3i5ffBzuvt6Pt2kMu0weXk4PmEnNKjs93k6PTG0eyNo9Slt+CartslUKzc4PTk'+
'5/fz8PuxvuO5xujw7/xAZraPpdbm5vjz9PqnuN/y7Pz09fjy8vzl5Pjz8P3u8Pv+/P/r7vnw8fzt'+
'7/vq7fj09f3y8/zp7fjs7vr29/3m6/fq7fr09P3w8/vn6/nk6fjj6Pbl6vjg5vb09vvl6fbs8Pr2'+
'9v3o7Pjb4/Tz9PthjY+AAAAA5XRSTlMAw8K/w7/DwsPD/f3Dw8PDw8LDwtvD48PXycG/vuPE2M/9'+
'w8940fDxw8Pewum90jXAw/3F+w3DwsrT1tD31iPx6cPR3PD8x/7p9svxUvy/+gMJ5dL+zMzfPPL2'+
'afrNRR3O1si/9vz+9/As7fHUE/HAj3LlxOrD9tjczND65uLrX+7M1hdix+P34OzO/OP8bKrV3s+D'+
'zfnexVlAs4Tcot/TybT42b7+6fysitf+xEvD1brLyvDr0MeXmOl/zNDq/dqhpdTO2MEF9eLMnt7O'+
'v7bq96nfwmfS9tm+6/WIw/T26r/r/sj9uIVwBQAADlFJREFUWMOtmHlQE3cUx2MCJBkJVyQkIQGG'+
'I5FIAg4SQsINUq6C4nCDAoGCqNzKoRwKojBWPECsImJ1qDre99WxHr1b7aW9WzudmIMkhASWNbCb'+
'/jag0lanpfb9wR/s5jPv937vfd97i/sXtnz3Ctz/YK2e8bX7lr86J7Tr7kDgrkuJrwzae3Vd1eGE'+
'/HsBr3qwK4rJsKt69aehr4RZ07Yv8uFk6QaTPrZr73/26YOAxH2rB6RRstJtkz3CAUnXyf8Y5Vs/'+
'5Q7gyeRy7i+/IQI+GT+Qe+XKf7i9jK91hoRIJhN/E71zb7xGlJRETteoPm1bMlvQsfbClgnk8IOE'+
'hJTmtxrXwe27orXjaPvRpbMFXbtbXHBVrY3O967PWPGdU/7PqkktO67/wOxBOxZfXbutjHrk/fJv'+
'dh+cc4QaFtxw+I2dswcdq0XVG1ip9qyzLbe90PAYgltMiHL07uyPtvfg2HBwDIEagihX+0OmLSEs'+
'1qohLbvig3/165lV7vupQh6yKWxCr6UzXtcPTZSGBKvjsmdk5csT1PfYif0zKmF3QRk8oVcr5K5p'+
'kEKtVstV7ftanz1d2tzlGfqSDPwKrvH6uvlZEAKu5CgwDsITQFqFWq8e+f6bpw+X+H6S1g7/mvHC'+
'DPxEh5YU7nRtni6Q5qPlZEHT6xoESRdAiFzbE5VG7v1yOrVPxu9MWL9YdiJ7zZ8YS0B5VsbvgtaJ'+
'4NHF2eZ/rawI2ogXltDOowjCphsR+Iu6QYaf9cbcYyuxx4lxY7r6hDEvr/d8Z0R4/+WMjC4visUW'+
'1WdlBsXFk+BU2V/1J5GlNATRGXWq2ChkrhE2Ij5CMpnZdDFxKc730Ihhy+9vqxwsNl739PWsbDVH'+
'+Lvu/vO3B6wpjj8YNoXIlVVnQtuO5uVd6HQmDuoQnU6FigWoSocg8vUMZ2HdYF7a0cTdVSOyrQ2y'+
'H9ztSBaS89zj90Dcu2otxLCppZzp9PFD4wbWnvEHX9+SDOCF578QE6WDRo0qWeDsLEhWIapCBp9B'+
'W39Bit8YfzF9/D5rj2bL2UcUKc0gL9lcewB3eaN/ZA0yIt5c9aEb1c2eVZUTt9mPSPb3KSrm+ZfH'+
'jvd4OOPxzh49miwG3yM2bn0j0U/qlwLBqYQQt5CyrQ5pYyMJYv/uA7j93elwymfh49pwF4I9IWab'+
'Sp3Zm5ZGJvLiihI6XIl0Ed4aGF40KCLyOhLWx7kSPTwYPKVat41KIJwtVaJhh/sX0QYu4zwfsGWK'+
'sGWXDpHOvc8K2WJQK5p84MUiPo9TFNcRzSYzSWZjJoliy6KLc7h04XpjYR2i0BtWudmfq/483q1U'+
'KWPvqsAtP8EZ0WonDwX4evqXKkECan04WsSVT48uEdRLjotJFha2trYWFiT6zdUSwfnMSAasRT8y'+
'yhTqIVlHhe/SKyaFQpaZ2wZu/1YKXQBHXw5YcYer1cu0yHoIpA4/KME1iclk2lIoVmaj2AYymUkS'+
'rofEqEOK4BGtWsalf7nyWg0Sxav5PAMTzrY8Z+Gi9nNHfzzFF8MylU43VycvJEqaRMxAWysHBzs7'+
'Jycnu+qFDhRbW5J1k4gN3kB0iHaMV84//ZNLLczg51XiMNvuRfZf1Hfk3B7O8V5GLAwuWmWMI9e7'+
'kgDGzsnb0dHGxsbR0dupGqBIPFH6GzrwCsQRlAfVjH97pAEWkb08p0F+5HX5BMImg3qduFyQbERj'+
'6WTrggKKQ7WTo417xJwId0uXCHcbx/nVVpSCAus0HhdC6eWCTNmkbBnh7Dr8U5BnnpD+JgaaMA0h'+
'cQJGVBrRz5pkQbGy87Zxd5ljGbF1UV+E5RwXd5v51Q62FiS8M1Hc2dk0pleb5MsIH8N0Yd4UaHdC'+
'pk79MBWAgGaoIBrfD49xHJwczZh5YVqtMiz/EUCt9bbDSNZ4Pg9WyYFGaZdRf1ZD3Hd3m6efXw0q'+
'lL1rzpFNSrUCxDlLiMdbW9haOXljnIYwcM2QekhR2oCRHO2sKCQSnsiV6+YqFGrlMsvDNbDc8NVy'+
'TJy5cEmnoP+zR/kyNVqEqFAGcMiWstB77RxL9w2mx8PIttQN8sePZdj51s5fSAEuMXpUSBGqVitv'+
'OO7w6CyB0UpMWm4evxBn1MDRNXDsRzCCQPQkEgkczMbSfevbw49N4W6sBSy3UtPjyeB5ERE2TuBw'+
'zEiQanBj7Lh23YfjUMuFqNpsTI4uSzbTk02alK9Od6Kqua/JaX6kQCs7R/eGDxWT+jA3lr09wd6e'+
'GhKsn1SWNbh7V1MCk0DzBvJyWowWap6gPOuNZzLMMp59Jk/w+dcV35wiF6qMKAd4ZIs5tHVcieyh'+
'EuxZMSHUqXrWjvdZ2jhZ2TJdC9/RyZMZzrcPnbgo7r507Gn3aW1L/GDNEt9cvActSCQl0yWUam93'+
'y3mK0QYW8GWPbiJ4D9V+AStEpci3dPdeSJGI/UWrfcRE60vLWwOad6/E/dneyrUm8vlEcSybRLFz'+
'jLCcZ1ClEuzdVk2Yhg0T993sF6TKZQDkWE0h+TRFSvlEsnX8lGL/HeRM9GBHc+sDrZxsXCzn6bWp'+
'BNYq05Phx8NPDPdZBDeZfp6liw0Ikqgpmu1BdH4Z6HZ9nQ83ixPJtJ0CPTalEqirnjzGzISBngwD'+
'EAiSBdOjJYvrU+dx+8Wg732Kc3JyvvD/EyjcYAYZwqnPQbZMYgl4s7jk+4wXH01U58OJTuBZzwTd'+
'N017NBOEd03IBB6JXhojItmD3ZG5+kUxWsWyfx6joIQOECOi9ctBQr7Ug+1T8NdbM8nvp864tQIf'+
'dlq58AW31noyFOfb6pubROekS/zJkZFP8yjEnEfBII9YWB5ppvOoPlIkoRXypNaXEn0/aPVdins6'+
'LpyR3DkUD6RWhMoRI0qbzuy+MaVqjzmnQ2KwvxtU2rE+S6zYmDxYh8jRNOlHB099fjH3k4wpdyrq'+
'vWKRIW4eb/B0IWjNmnRzrXn/qdYIoNYmp2rNjhLIjAJDgYpz2gc6nmLQcu5eqgzAJpSdKcVvqDRj'+
'nH4ksxHVIFAkHsjawvk2QBqDzdVPJVCnqj8/wuwQSCNYg6CNmTKkSCeXQ0UdH2E+tWUVdTLYKTci'+
'8mX6sWRE1TOlR9VTemR4PKzaYNYjLdAjl7XzqzE98s9SIYvHgR715Xc0eZxG12NbWGWRsZBX4H3E'+
'LLUanZz7XCHnAIUsBeoIqfWK0o+nFdIWU0iOHNGYFfKII5PeBKHZWIxuwZAcqooxg2QI6sp3Nmv2'+
'QjvHtTM0O2LOTM0WJxsnpjS76iFiNB4KNbejPEEL/PECABrSo7RecYmrvzMTU/+/dRHvagdwMD9i'+
'Gi2qNypZPYR1kfzRTPHqpw3SmdhydgHhWwPS1FtOg+TG5NhIc1+zm+8IUC6WLs/7Wn1BQVQLihhj'+
'e8vZkEmx7MjZFrL0WYMkk7mfvX/uNC2tnJ5pBNOnSl7kL0kn2WIob9Bo14JW6z0f67QWNJGPTqVC'+
'EKQnvZyxs+fb929wyE8bZLaXn7Cw9sa1vaf8Y0dkGh2E5YhUwqkHJCuHhdVOmIHebwU6dkGNx00E'+
'tH4jolVyGPz4K4GHC4V+06DKHWQGStuOW3kQxqYapHgRgtDAWJPux2RaPJ1GKMAbMI3QE8A0gswt'+
'huVKhR5i72tN/AjtFZpBoRWnXzeOqzxXZB/4vVRuUiuUPjVaXRDftSOu8fhOttji2XyU0n+zsSQh'+
'yB+WoXXjCgXIovB720MrNQ+3QJ9WrsFV1qbItOFu1++cPQfaFzaxtfAKOSIpryUnqyzB9dnEhsfz'+
'ossKczh0YUkPmJcVajCxEc6du35w2dYR2bs3m3Ge3VFZNw+/PSS7GmHuOYg6q1coJBNphYXclDSy'+
'D93PGphfUFwQP/Ldjri4KKK/fzlPqTDPkNStimGkb0cLr3s77poXUbBOq6blfYhsisGm2qy4PLAS'+
'+w8WldClQq4cjpLi8dIoeAIVg+m4paiRSCbjm6CrjwgxVLe3377bpNc+5BFBlCoO4wU5sjFG0sJ5'+
'RvmqR32jtSduSbrxwgsXGFJGnGauCuIRiTwI66wALC7G5uxLF1u2NLBWBUPhjkyPcRk0SK7dj8u+'+
'1zlQwPm03jbQKWw4vG9E0fHliuajeccHhc7CEjmCzH3NyKMbX5urUmmLGH7EzsEdaV+e9EwwGBtK'+
'J0sdF5I2F8NBmyXfgWILONl1ff9Kz/hdpDLZ4Q6DDKubgOw7O/FkIh2CFkE6lQ/YRaCsHigKnIrU'+
'j+0ia26NyNqrFGWBFK/39n4iONPWOrWYYT13edfqLaO8HrRm+9R2dCxyI17aWHf+DZBUYiNijKur'+
'E4LtKH5qNfRMyeGmj3y4K95zDfBk5uKJLVqFuuLYvOOV06vX3gOn6qPWySbM+5pGqxhtChKdOjC9'+
'r+2vtW48r+m5/MK+tvRE9OruE23PVtWVh0b1QyBBkai0MaVCATSp+MeAZ6tZ7oAo+uCL19olJ7vi'+
'sbXuaU947+MqdMKkVo+4MqZ2WujGd8+32OXvrT7T/NKvPDM9DT34w2jqpjAltmVDepO8dI/8B9ry'+
'GS8n/rsvb4k/wcOlVNA9jNjerwd7PzV4cuTgXtwsbUlXLazYxqKCLxFNt72Sw2NAIoerR9svzxr0'+
'nhda5r5nG2vBHPBt5HrEEeqq8BtXof6K2YN2nLduV8ztc7fLeyv0lMONMpn+oWtyyuxBB+6W+IBv'+
'Dyk5O3e0Lae/C7/bb5T1oO2zBuG207PksCs+SdICn9k3xpX4+UVGTyxqzMbN2prvHDrTTSI7l/f8'+
'8tviXinZonvflX17l+BmbysDQnfn7sJHGUq3qdn4B9c9V+Bacf/VMiquQ8Ol9ydlB6/54l7NdivV'+
'YVcVikO4V7Vr86r6brTnH1jyqqDEzt8pFG9BM+6V7eS+XQ9OJP4vX8b3X175z2/9AfI1uSxUVqu6'+
'AAAAAElFTkSuQmCC';

flake_image[3]='iVBORw0KGgoAAAANSUhEUgAAAEgAAABTCAMAAAALIrEtAAADAFBMVEUAAAAaRqYtVa0TQqMUQqQO'+
'PaERP6IrUasRPaEWQaPv8/n19fkaRqUjTqnn6vY6YbNEaLcsVa4uWK9Ha7ns8Pje4fPi5fTU2fAm'+
'UKs0W7Hj5vXQ1+5Ia7mVqNfd4fPx8vqHmtH19PvY3vDS2e5aeL9Ia7n/+/3m6PX//f7b4PI3XrJY'+
'd7/j5fXQ1+zd4POfsNvk4fe3wOXZ3vFRcrwfSqjW3PDN1O0uV6/CzefM0e378/7i4fbc3fPd3fXe'+
'3/Tq6/fq6/cmUKzS2e7P1uzL0+vn5PdcesDg4/SOotRSc73V2/BuichUdL7W3PBsiMaCl8+crNrp'+
'7/ems93x9fr38P3j5vPk4vfb2vStueD18/zM1Ov49fza3fJWd76UqNYrU63k5PaGntKBmM54kczT'+
'2e/P1u3I0erCy+j19Pv//f/f3vXj5vTy8/ns7vjT1/DFz+jy6/v+9f/39vxaeb/59f7t6Prq6fdp'+
'hsUaRqZAZLaEmtBQcrzU2u9ohcWZq9hnhcSdrtlyjMphf8Lw7vist9+qtd7v8Pjt7Pa6w+bq6Pnn'+
'5fnW2PLz9Pvd4fNif8K1v+Khs9triMWrut7n5/fz8Pro6Pd4k8ywvuFCZravvODQ1+2hs9uXqteH'+
'ndFmhMRRcrzDzuk4XrOntt769v6WqNdJa7jo7faPotTo6vPZ3vF1j8qut+Lw7/paeb/49Pz9+P7N'+
'0u79+v6ZrNjJ0uqnt92mt920weIyWLCvu+Hq6vSOotS9x+bq7PXW2/DK0uvq7PXBzOd3kMrx7/j/'+
'/P6NoNP29Pi6wuTv6frc3PLl4/fAx+nW1fH07P3y7/r8+P7Iy+r+9v/69/xRcrucr9m6xeQ6YbPF'+
'z+h0jstkgsP19Pri5fDk5vHc3vDEzejAyOakst5nhMVbeMDw8PmWp9ft6PqGnNGNo9ONotR+l865'+
'xuXr6/dhfMPt8PjGz+b28/vOz+7u7Pi0wuKSpNXU2Oz9+v728vx1kcq8xuXAyeiEl9Ho5/e1uuRg'+
'kcr49/z+/P7o6/cZ61zdAAABAHRSTlMAHgkjCxIYAQQH+/sOFfVESyEoUvvw6ckyPffVRZjq+3r4'+
'8d1mXb7wxPY1X/Dt3J+6p+xWLerJEdm2vsbGvs7q9jrn597aMPaTUON6SdllcYv5kPu73MG2pf3k'+
'+NQ6oUHUf4Z84c/DwPbOuOT297zevcD7bPzE8EApLI9C8Fydb5lzZNSXhvu5r8/Dv/zkYJ69g7/h'+
'9+aKxiW32qiUiXU2zRqh94099ofF5Gud93fR+L39qtazrMpMrbKMyMzo0dOuYc/Ygr+XyKvMqbLK'+
'5vqixPpmstJS5FJM18qws7iclGtX8X3XlqmcPNrHUPeny63fwHKl1OyUurNJ+pZz///9p7kIuQAA'+
'CuNJREFUWMOtWHdYU1cUfxBIQoCQBEhCwgg7QFhhyN57b5AgsveUQsveYYNsRURB2aioOFABtS4c'+
'n4vWibNqa7Ha1u7GNi8ESFI+Kn65+Sf3vnd/95zzO+td4COGkCHAn/HFPj4BfXVbhD9AzYdz+YID'+
'D+/6li9AQhPK+XwBgrYoo/gCtO1kjCtfgJx2h9755M0wQ4Hl/99O2xWuPBEUWh/S5q3hEvDFv58T'+
'p1SW8FGvXkCBdSIdDQ03YJ2O8jQqXrS6arh9p8S6tTM8QrUvAqW6q2xEYs7FXFs07PcJfwrt7oeV'+
'HPIwQKGn0SAAR+2gKh36eHFE8JwzmR1uRnM+FUS76nNyVEKLK6ed4ZC19XkpxjkVdzemKinLI4kN'+
'/zj0cFsZsnZKUHXQ5F6Q/D3WeYsinWqM4k0JW9f0A+/QTQAPUlqDaAISV8r7ZpTJtrWAfvqaF2jX'+
'eIOoIsUCDBIY87c8XNKd1gKKtv+cy8GhUPS4FVJRJ0Qc/kXpXr+yFVuX8AJBuawbqc0FJDFfLbl5'+
'lMKIh8g+NrWoxdmu5JYj3LILA5DmZjx8ee7DDWQ4Xhv0ROXZh3DVIPPgJPMeDj63h668uUHyV1Um'+
'j0fSXxosidWtJMGiZIlq25CrEabtoictGmKS9FHwFSD0b26ybPVz3VvS94mAeC46oVtVoKzFIo27'+
'YJxZRcPZEuuHGGEpisgcx9qMUU6+neKn7rKSgazLd0bGbI8Xy4qL0b6NEmIC7QCB4N21pmj2cQLC'+
'o44KtFa953eCgoU5ydxtdIcZCDIuDtqeujIrRg0h2oUeQgkJ/OiswjxF35INBNtV6JR7hXbz6uiZ'+
'P75aSpMCWkxEGZx8sbCH3LSdfXyxOGcs9MTFFtjr9hlTQwQA8cuWpq5QluBXEjOKtjNuOrbu11uO'+
'kBP3igHoCVzM6ZDpAvtYF0NeD57HKWsQhwmecsJo06TgoMugTHCvSwE5SNoe2saLek5sZTElV7Ug'+
'JThlAlG5wDNO5b+Bgt85b6yhkECnNG5Ls9S74reNte2C2Te/0GgJ1zIyQLaFPDDQaktzyegIaQVF'+
'ulH8idXzSk8adUuKIrJaswlrhT8mCwPd9SF5Mi2VUf3ELPEOSOf7t+KoqTAJHx3RlBRRYsjqaQ6/'+
'w805VVRU1KbzcrKV7JVMH1lBQMzPD+/X9iELOEdimhQTbRaAL1W30O9KFVWkI52nteD/hYFE71aS'+
'D8OFhSUjGO3yYdcDZm9kVsIAYTj8tEL96TOCTDW99TKzLVQfqTekMFJbA3ViPSlK4Zq89V1yu7TG'+
'dFSWvkVaiDFW9Oazb2b/vJh4Hc58En1WauHeQzEmkE9igHVB/LW2mwsNIaQK3aceHQ7/mNzisnZv'+
'R5dGepEEDECXPZW4bGWTcFBxjNHkJQNKOnlWil7+syBoeYNLrZ8lMBh06Tp3QxFQK9tXBc7hKxVQ'+
'rGw7dS5qkyCLlufjWJtvrr6jHfhwFJLvJQ6gH7CBJM7Inpl/tufAs5rsd9KO45EQVo6XfWl0NGsD'+
'u3bmUUya2R2QVk02hejS6BOmuKWeYa+z/03/tskZKfq9R+jI8+TyZwsMxmeU7NHrF6lhtcfxbKN0'+
'Ot9eZO/Yq6xlkxnUPS5pggu4OLdFvMth1COth4ofnfVF3IuqIL/GSikoJFu1brR+ZLi3NijJch7P'+
'Dhn3uX1wUPNFwdjS9YoJ52Le3sjIvuRzPgLpL7Xg+eaUL2Lm0vlkXwRd3aK/P/hiwI1jPje6fw96'+
'rbvkRsLbVu8Nv3+fYWb2M5SkNkSRQiCs7yMRM6cIdIRv4PkA9MgNM7MR4cejApjBCrn/6wh7zxmQ'+
'yFfgkCG1qsABhD9W3ldnwJ+OnFF74C1m8PqtB5MTkBg4DPYRbY3sJhjQ30Q+P4QdGMAGUhaQgQ/f'+
'eKHBmIV+Svf4pOlB1f3hU5OBOvcnm3qEPqlxBHlAj/TFqg/4Br7GLiCTz6tdyBcBNjgJrqsjLkwa'+
'FEKTkq6lIBD+ycn/hCH9Eb7Ys+QyoPEHvy8kIf+3XbWUpAmgHmuKD2aqBeVWJrZLIegDyUzWTg2p'+
'+yIQyHePRBrJZldu/LX6fvFl3VVqzNPcmxJV/cjZP5wT7h5DIAaSh6ru+yLKHzycUR/wX7AePGdW'+
'k0kmCYkDgjAuGVhNXstODLs7cjEPDtILtiVlOo55mtjUDwRWBaiVxCkgZiabH6gNYRXqU1rb/4wb'+
'AWT1VfW9l0FytfZBWX+apedUxRa9vWQ2KcnqrfvD2raDH8as96uRq8pU9kvRZ9QaZd6Q1QJTNzIO'+
'ysuhtPIiLPdXsEXCv0gPPbaUjCaMbi+2Y+LFptk6WMfZnJsH2iIueP/0XBMYeS9FP6XmBYh7VdqS'+
'rGkHaL/UtMtHmD7vZzlIfp6J3Q7USvHusCs4JMs6AvNE34LAYIy1/ZLhDmKDQFKnyCOsvvCp42c2'+
'tIMbh/VIMnd7wf60yEHJxIvTv2CSPxK08zZhtPY2PjmZw6C1X5Uey8hs6gV7ry9T6WcnZcCK9UNV'+
'IMOxJuemIrbIr05fS1aOqDSlK8P7mbjTQdoh3lMdm8NQSLap9d5aHkCuA0mQPW2jUF4I9liFiWoZ'+
'juaXHCnXRBUChxtwscPUoyobgP8MieNuhDFmFcHigpF1ApVql7wxAAxfCnVC1ls59XcbMtNnhRl5'+
'8K9rMdU6SLDaSBN3ru6aKnXqtBRR+TSVivpXMO8vR8FM8+Y9aURho/mFgMQzIC0eg/gL7Q2qkWH0'+
'hJQtw0cEVm2xXftinBMUCTjLzRekIyShXv0wJivXzWat9+y5Vh4QsNigPa0M1kn2hozrpCrSlXbv'+
'XaXSCuQRlWLihgnGddGQy8Y97LNgfpnqG2l7GIyLVT/1gvNz7/XqzEmAuwWRMG1cQN1dBufJPxLH'+
'p7SJ86djqfNagMD47HISr0y8Ott2IPm72cwv/2BlVdU+vaAyQCwKN2yqz2yruqIEuCiT+9qeGLdz'+
'l+1ughxTyTNZIuxkLONa6WOZwNjvpRlJ6l1c2xsE9sqQk5RSaH63cZf2UYOViDPo1FaOj7KFAYLb'+
'CSc4Dygrf4qviGjb03pdExAB2EDmaZrMPUecPZi1AqWLi/m6A8rOgx32Mb/tBP2KCaQRyQlUejG4'+
'rl1enUZoC/f7nr2GsiphYoocUcpnyazVN12wFcOy8ku3CRU0GB7gY+diDhyxHks9Cx3LZFGLCHVp'+
'1aW8cWszqMUO7V3slzzkDs99xVT217x84WUlizS0OIiUCwpOytaPtv4woWJplabKxY5uqNNyMdwV'+
'ffsYAOnlfFxS8P3KxL3G0tz0sWGjDSMeJalfcwLOBZSO5pQdz+MF3dr5K23/8erjpRgYyhjpH2be'+
'KH5sA4wLaG7NuuTD8YUhuEGcqbNIn7pogjTuOW/hkzsqthZQpQlvGYZUy4Pfa3t535RrWfMuKHKr'+
'IE+NjMJRtiQouMXztotyh9Ys2LcieSKwg6oRQ0lVphKUuWMByOpY+xYMw1WoVDopDn2XY+1O952U'+
'VmpBwTlVtv34+xHUhIZRkQzcwNMtpBcTdVjJ/gUE+IQhkMcsCOClxuddUyVwZn5w6dLo3LxuGHhh'+
'Z2j4YrX79vDUCRjoDq4uDulZ8PXhwG59d2jJCJum7SLZqzK6Jn/D1ieQJnp5wy4Tt+VIFsn1EPv0'+
'G605t0J+3bHd4QuQwI98uvUT3t71OV+ABCcO8+dmFPYCTAn8GLcm+HR7LNMM8GdAPybQ/wXfAGJM'+
'2276KAAAAABJRU5ErkJggg==';

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(the_weather_outside);

function the_weather_outside() { if (document.getElementById) {
  var f, i;
  boddie=document.createElement("div");
  boddie.style.position="fixed";
  boddie.style.top="0px";
  boddie.style.left="0px";
  boddie.style.width="1px";
  boddie.style.height="1px";
  boddie.style.overflow="visible";
  boddie.style.backgroundColor="transparent";
  document.body.appendChild(boddie);
  set_width();
  for (i=0; i<flakes; i++) {
    dx[i]=0;
    am[i]=6+Math.random()*18;
    xp[i]=am[i]+Math.random()*(swide-72-2*am[i]);
    yp[i]=Math.random()*shigh;
    dy[i]=1+Math.floor(Math.random()*2);
    f=document.createElement("img");
	f.src="data:image/gif;base64,"+flake_image[i%flake_image.length];
	f.width=72-54*(i/flakes);
	f.height=83-62*(i/flakes);
	f.style.position="absolute";
	f.style.overflow="hidden";
	f.style.zIndex=i;
	f.style.top=yp[i]+"px";
	f.style.left=xp[i]+"px";
	flaky[i]=f;
    boddie.appendChild(f);
  }
  setInterval("winter_snow()", speed);
}}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)!="undefined" && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function winter_snow() { 
  for (var i=0; i<flakes; i++) { 
    yp[i]+=dy[i];
    if (yp[i]>shigh){
      am[i]=6+Math.random()*18;
      xp[i]=am[i]+Math.random()*(swide-flaky[i].width-2*am[i]);
      yp[i]=-flaky[i].height;
      dy[i]=1+Math.floor(Math.random()*2);
    }
    dx[i]+=0.02+Math.random()/10;
    flaky[i].style.top=yp[i]+"px";
    flaky[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
  }
}