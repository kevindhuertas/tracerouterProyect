import subprocess
import csv
import datetime

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

# Define the packet sizes to use
packet_sizes = [64, 128, 256, 512, 1024]

# Get the current timestamp
timestamp = datetime.datetime.now()

# Open a CSV file to write the MTR output
with open("mtr_output.csv", "w", newline="") as output_file:
    writer = csv.writer(output_file)

    # Write the header row to the CSV file
    writer.writerow(["Timestamp", "Target", "PacketSize", "Hop", "Host", "Loss%", "Snt", "Last", "Avg", "Best", "Wrst", "StDev"])

    # Loop through each server and run MTR on it with different packet sizes
    for server in servers:
        for packet_size in packet_sizes:
            # Run MTR command using subprocess
            command = ["mtr", "-n", "-r", "-c", "10", "-s", str(packet_size), server]
            process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

            # Parse the MTR output into rows
            rows = []
            for line in process.stdout:
                line = line.decode().strip()
                if not line.startswith("Start"):
                    # Split the line into columns
                    columns = line.split()

                    # Append the timestamp, server, packet size, and hop number to the row
                    row = [timestamp, server, packet_size, columns[0], columns[1], columns[2], columns[3], columns[4], columns[5], columns[6], columns[7], columns[8]]

                    # Append the row to the list of rows
                    rows.append(row)

                # Print the line to the console
                print(line)

            # Write the rows to the CSV file
            writer.writerows(rows)

            # Write an empty row to separate the MTR output for each packet size
            writer.writerow([])

            # Close the process
            process.terminate()
