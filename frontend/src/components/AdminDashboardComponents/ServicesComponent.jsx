import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ServicesComponent = () => {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [services, setServices] = useState([]);
  const [editServiceName, setEditServiceName] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios
      .get("http://localhost:3000/services", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const newService = {
      name: serviceName,
      cost: servicePrice,
    };

    if (editServiceName) {
      const updateService = {
        name: editServiceName,
        newCost: servicePrice,
      };

      axios
        .put(`http://localhost:3000/services/update-service`, updateService, {
          headers: { token: localStorage.getItem("token") },
        })
        .then(() => {
          toast.success("Service updated successfully!");
          resetForm();
          fetchServices();
        })
        .catch((error) => {
          console.error("Error updating service:", error);
          toast.error("Failed to update service!");
        });
    } else {
      axios
        .post("http://localhost:3000/services", newService, {
          headers: { token: localStorage.getItem("token") },
        })
        .then(() => {
          toast.success("Service added successfully!");
          resetForm();
          fetchServices();
        })
        .catch((error) => {
          console.error("Error adding service:", error);
          toast.error("Failed to add service!");
        });
    }
  };

  const handleDeleteService = (serviceName) => {
    console.log("Deleting service:", serviceName);
    axios
      .delete(`http://localhost:3000/services/delete-service`, {
        headers: {
          token: localStorage.getItem("token"),
          name: serviceName,
        },
      })
      .then(() => {
        toast.success("Service deleted successfully!");
        fetchServices();
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
        toast.error("Failed to delete service!");
      });
  };

  const handleUpdateService = (serviceName) => {
    const serviceToEdit = services.find(
      (service) => service.name === serviceName
    );
    if (serviceToEdit) {
      setServiceName(serviceToEdit.name);
      setServicePrice(serviceToEdit.cost);
      setEditServiceName(serviceToEdit.name);
    }
  };

  const resetForm = () => {
    setServiceName("");
    setServicePrice("");
    setEditServiceName(null);
  };

  return (
    <div>
      <form onSubmit={handleServiceSubmit}>
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className="form-control"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Service Price</label>
          <input
            type="number"
            className="form-control"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editServiceName ? "Update Service" : "Add Service"}
        </button>
      </form>

      <h4 className="mt-4">Available Services</h4>
      <ul className="list-group">
        {services.map((service) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={service.id}
          >
            {service.name} - ${service.cost}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleUpdateService(service.name)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteService(service.name)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesComponent;
