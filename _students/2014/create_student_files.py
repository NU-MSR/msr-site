import os

SPACES = 12

def pline(f, tag, val):
    data = "{0:s}:{1:s}{2:s}\r\n".format(tag," "*(SPACES-len(tag)),val)
    f.write(data)
    return

f = open("./studentlist.txt", 'r')
for line in f:
    line = line.rstrip()
    vals = line.split()
    fname = vals[0].lower() + '.md'
    print "File: ",fname
    f2 = open(fname, 'w')
    f2.write("---\r\n")
    pline(f2, "name", line)
    pline(f2, "first_name", vals[0])
    pline(f2, "last_name", "".join(vals[1:]))
    pline(f2, "class_year", "2014")
    pline(f2, "website", "http://robotics.northwestern.edu/")
    f2.write("---\r\n")
    f2.close()
    f2 = open(fname, 'r')
    print f2.read()
    f2.close()
    print "\r\n"
    
f.close()
