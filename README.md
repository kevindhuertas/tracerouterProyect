# 📡 **Network Latency and Bandwidth Analysis using Google Cloud and Azure**  

## 📌 **Project Description**  
This project aims to analyze **network latency** and **bandwidth** using servers hosted on **Google Cloud** and **Azure**. To achieve this, we set up multiple virtual machine instances in different countries and conducted tests with files of various sizes to measure:  

- **Latency** between servers.  
- **Traceroutes** to track the path of data packets through the network.  
- **Bandwidth** using tools such as `TCP ping` and `curl`.  

## 👥 **Team Members**  
- **Pamela Mena**  
- **Luis Cagigal**  
- **Sebastián Romero**  
- **Sthefano Ulloa**  
- **Kevin Huertas**  

## 🌍 **Infrastructure**  
The experiment was conducted on **Google Cloud** and **Azure** servers distributed across multiple countries. Each server hosted files of different sizes (**1MB, 10MB, and 100MB**) to evaluate the impact of file size on latency and bandwidth.  

### 🔧 **Server Configuration**  
- **Google Cloud**: Virtual machines were set up in different regions.  
- **Azure**: Similar instances were created to ensure fair comparisons.  
- **Geographic distribution**: Servers were deployed across multiple continents to measure differences in global connectivity.  

<img width="1158" alt="Servers running" src="https://github.com/user-attachments/assets/558b440c-95cb-41f6-b9b8-e16d25e53163" />


## 📈 **Analysis Methodology**  
1. **Latency Tests**:  
   - `ping` and `TCP ping` were used to measure round-trip times between servers.  
2. **Traceroutes**:  
   - `traceroute` and `curl` were used to analyze packet routes across the network.  
   - Route differences between various regions and providers were compared.  
   <img width="592" alt="Traceroutes" src="https://github.com/user-attachments/assets/6491ddf0-9ace-40e9-a567-ce871c0f4b16" />

3. **Bandwidth Analysis**:  
   - Bandwidth was measured based on file size and server location.  
   - Results were compared between Google Cloud and Azure.  
 <img width="516" alt="Bandwidth" src="https://github.com/user-attachments/assets/d4479ea6-8d99-4728-9259-dff10bac6c9e" />
 
## 📊 **Results and Conclusions** 

- Significant latency differences were identified between regions.  
- More efficient network routes were observed in certain continents.  
- File size had a direct impact on measured bandwidth.  
- Google Cloud and Azure showed variations in efficiency depending on location.  

## 📎 **Resources**  
- **Google Colab Notebook** with the analysis:  
  [🔗 View Notebook](https://colab.research.google.com/drive/1oVua33lHgC_pH-6m_ox-7AxNTwd7FcWD#scrollTo=CtrV2lrw6xKz)  

## 📌 **Contributions**  
This project was developed as part of an academic analysis on networking and cloud computing. Suggestions and contributions to improve the methodology and analysis are welcome.  
