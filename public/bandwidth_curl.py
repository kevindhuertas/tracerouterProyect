import subprocess
import time
import csv

servers = [
    # Azure Japan
    "52.253.119.179",
    # Google Cloud Paris
    "34.155.23.105",
    # Azure Africa
    "20.164.37.45",
    # Google Cloud Tokyo
    "34.84.32.225",
    # Azure Sao Paulo
    "20.206.136.251",
    # Google Cloud Los Angeles
    "34.94.237.104",
    # Azure East US
    "20.115.21.116",
    # Google Cloud Los Angeles
    "34.175.240.213",
    # Azure North EU
    "4.231.225.177", #fix
    # Google Cloud Los Angeles
    "34.176.209.21",
    # Google Cloud Taiwan
    "35.234.37.87"
]

files = [
	# 1MB
	"1mb.txt",
	# 10MB
	"10mb.txt",
	# 100MB
	"100mb.txt"
]

sizes = [1, 10, 100]

url = "http://"
savename = ""

with open('results.csv', mode='w', newline='') as results_file:
    writer = csv.writer(results_file)
    writer.writerow(['Server', 'Size', 'Download Time', 'Bandwidth'])
    for server in servers:
        for i in range(len(files)):
            savename += server + "_" + files[i]
            url += server + "/files/" + files[i]    
            start_time = time.time()
            subprocess.run(["curl", "-m", "60", "-o", savename, url])
            end_time = time.time()
            download_time = end_time - start_time
            bandwidth = (sizes[i]/download_time) * 8
            print("File: " + files[i])
            print("Host: " + server)
            print("BW: " + str(bandwidth))

            writer.writerow([server, sizes[i], download_time, bandwidth])
            savename = ""
            url = "http://"
    
    

