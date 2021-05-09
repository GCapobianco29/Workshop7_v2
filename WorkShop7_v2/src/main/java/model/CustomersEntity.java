package model;

import javax.persistence.*;

@Entity
@Table(name = "customers", schema = "travelexperts", catalog = "")
public class CustomersEntity {
    private int customerId;
    private String custFirstName;
    private String custLastName;
    private String custAddress;
    private String custCity;
    private String custProv;
    private String custPostal;
    private String custCountry;
    private String custHomePhone;
    private String custBusPhone;
    private String custEmail;
    private Integer agentId;

    @Id
    @Column(name = "CustomerId")
    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    @Basic
    @Column(name = "CustFirstName")
    public String getCustFirstName() {
        return custFirstName;
    }

    public void setCustFirstName(String custFirstName) {
        this.custFirstName = custFirstName;
    }

    @Basic
    @Column(name = "CustLastName")
    public String getCustLastName() {
        return custLastName;
    }

    public void setCustLastName(String custLastName) {
        this.custLastName = custLastName;
    }

    @Basic
    @Column(name = "CustAddress")
    public String getCustAddress() {
        return custAddress;
    }

    public void setCustAddress(String custAddress) {
        this.custAddress = custAddress;
    }

    @Basic
    @Column(name = "CustCity")
    public String getCustCity() {
        return custCity;
    }

    public void setCustCity(String custCity) {
        this.custCity = custCity;
    }

    @Basic
    @Column(name = "CustProv")
    public String getCustProv() {
        return custProv;
    }

    public void setCustProv(String custProv) {
        this.custProv = custProv;
    }

    @Basic
    @Column(name = "CustPostal")
    public String getCustPostal() {
        return custPostal;
    }

    public void setCustPostal(String custPostal) {
        this.custPostal = custPostal;
    }

    @Basic
    @Column(name = "CustCountry")
    public String getCustCountry() {
        return custCountry;
    }

    public void setCustCountry(String custCountry) {
        this.custCountry = custCountry;
    }

    @Basic
    @Column(name = "CustHomePhone")
    public String getCustHomePhone() {
        return custHomePhone;
    }

    public void setCustHomePhone(String custHomePhone) {
        this.custHomePhone = custHomePhone;
    }

    @Basic
    @Column(name = "CustBusPhone")
    public String getCustBusPhone() {
        return custBusPhone;
    }

    public void setCustBusPhone(String custBusPhone) {
        this.custBusPhone = custBusPhone;
    }

    @Basic
    @Column(name = "CustEmail")
    public String getCustEmail() {
        return custEmail;
    }

    public void setCustEmail(String custEmail) {
        this.custEmail = custEmail;
    }

    @Basic
    @Column(name = "AgentId")
    public Integer getAgentId() {
        return agentId;
    }

    public void setAgentId(Integer agentId) {
        this.agentId = agentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CustomersEntity that = (CustomersEntity) o;

        if (customerId != that.customerId) return false;
        if (custFirstName != null ? !custFirstName.equals(that.custFirstName) : that.custFirstName != null)
            return false;
        if (custLastName != null ? !custLastName.equals(that.custLastName) : that.custLastName != null) return false;
        if (custAddress != null ? !custAddress.equals(that.custAddress) : that.custAddress != null) return false;
        if (custCity != null ? !custCity.equals(that.custCity) : that.custCity != null) return false;
        if (custProv != null ? !custProv.equals(that.custProv) : that.custProv != null) return false;
        if (custPostal != null ? !custPostal.equals(that.custPostal) : that.custPostal != null) return false;
        if (custCountry != null ? !custCountry.equals(that.custCountry) : that.custCountry != null) return false;
        if (custHomePhone != null ? !custHomePhone.equals(that.custHomePhone) : that.custHomePhone != null)
            return false;
        if (custBusPhone != null ? !custBusPhone.equals(that.custBusPhone) : that.custBusPhone != null) return false;
        if (custEmail != null ? !custEmail.equals(that.custEmail) : that.custEmail != null) return false;
        if (agentId != null ? !agentId.equals(that.agentId) : that.agentId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = customerId;
        result = 31 * result + (custFirstName != null ? custFirstName.hashCode() : 0);
        result = 31 * result + (custLastName != null ? custLastName.hashCode() : 0);
        result = 31 * result + (custAddress != null ? custAddress.hashCode() : 0);
        result = 31 * result + (custCity != null ? custCity.hashCode() : 0);
        result = 31 * result + (custProv != null ? custProv.hashCode() : 0);
        result = 31 * result + (custPostal != null ? custPostal.hashCode() : 0);
        result = 31 * result + (custCountry != null ? custCountry.hashCode() : 0);
        result = 31 * result + (custHomePhone != null ? custHomePhone.hashCode() : 0);
        result = 31 * result + (custBusPhone != null ? custBusPhone.hashCode() : 0);
        result = 31 * result + (custEmail != null ? custEmail.hashCode() : 0);
        result = 31 * result + (agentId != null ? agentId.hashCode() : 0);
        return result;
    }
}
