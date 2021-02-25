library(ggplot2)
library(dplyr)

IPEDS_data <- read.csv("~/Downloads/WheelerCollege/IPEDS_data.csv")

IPEDS_data <- IPEDS_data %>% 
  filter(Percent.admitted...total..DRVADM2019. < 40)%>% 
  filter(Student.to.faculty.ratio..EF2018D. <40)


IPEDS_data_UChicago <- IPEDS_data %>% 
  filter(Institution.Name == "University of Chicago") 

ggplot(data = IPEDS_data, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.))+
  geom_point()+
  geom_point(data = IPEDS_data_UChicago, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue")+
  geom_point(data = IPEDS_data_UChicago, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 13,size = 14)+
  geom_point(data = IPEDS_data_UChicago, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 8,size = 14)+
  labs(x="Acceptence Rate", y = "Student Faculty Ratio", title = "University of Chicago")+
  xlim(min(IPEDS_data$Percent.admitted...total..DRVADM2019.),max(IPEDS_data$Percent.admitted...total..DRVADM2019.))+
  ylim(min(IPEDS_data$Student.to.faculty.ratio..EF2018D.),max(IPEDS_data$Student.to.faculty.ratio..EF2018D.))

IPEDS_data_CW <- IPEDS_data %>% 
  filter(Institution.Name == "Case Western Reserve University") 


ggplot(data = IPEDS_data, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.))+
  geom_point()+
  geom_point(data = IPEDS_data_CW, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue")+
  geom_point(data = IPEDS_data_CW, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 13,size = 14)+
  geom_point(data = IPEDS_data_CW, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 8,size = 14)+
  labs(x="Acceptence Rate", y = "Acceptance Rate", title = "Case Western Reserve University")+
  xlim(min(IPEDS_data$Percent.admitted...total..DRVADM2019.),max(IPEDS_data$Percent.admitted...total..DRVADM2019.))+
  ylim(min(IPEDS_data$Student.to.faculty.ratio..EF2018D.),max(IPEDS_data$Student.to.faculty.ratio..EF2018D.))


IPEDS_data_MIT <- IPEDS_data %>% 
  filter(Institution.Name == "Massachusetts Institute of Technology") 


ggplot(data = IPEDS_data, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.))+
  geom_point()+
  geom_point(data = IPEDS_data_MIT, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue")+
  geom_point(data = IPEDS_data_MIT, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 13,size = 14)+
  geom_point(data = IPEDS_data_MIT, mapping = aes(x=Percent.admitted...total..DRVADM2019., y= Student.to.faculty.ratio..EF2018D.),color = "dodgerblue",shape = 8,size = 14)+
  labs(x="Acceptence Rate", y = "Acceptance Rate", title = "Massachusetts Institute of Technology")+
  xlim(min(IPEDS_data$Percent.admitted...total..DRVADM2019.),max(IPEDS_data$Percent.admitted...total..DRVADM2019.))+
  ylim(min(IPEDS_data$Student.to.faculty.ratio..EF2018D.),max(IPEDS_data$Student.to.faculty.ratio..EF2018D.))