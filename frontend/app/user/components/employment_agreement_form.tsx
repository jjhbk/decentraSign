import { useState } from "react";

import {
  employmentAgreement,
  contractType,
  Status,
  currency,
  terminationReasons,
  frequency,
  User,
} from "@/app/components/types";
import Signature from "./signaturepad";
const EmploymentAgreementForm = () => {
  const [formData, setFormData] = useState<employmentAgreement>({
    agreementId: "",
    contractType: contractType.rental,
    contractCreator: "",
    status: Status.inActive,
    contractor: {
      name: "",
      contact: {
        address: "",
        phone: "",
        email: "",
      },
      wallet: "",
    },
    contractee: {
      name: "",
      contact: {
        address: "",
        phone: "",
        email: "",
      },
      wallet: "",
    },
    position: {
      title: "",
      department: "",
      startDate: "",
      endDate: "",
      fulltime: false,
    },
    compensation: {
      salary: {
        amount: 0,
        currency: currency.USD,
        frequency: frequency.monthly,
      },
      bonuses: {
        eligibility: false,
        details: "",
        amount: 0,
      },
      benefits: {
        healthInsurance: false,
        retirementPlan: false,
        paidTimeOff: {
          days: 0,
          type: frequency.annualy,
        },
      },
    },
    responsibilities: [],
    termination: {
      noticePeriodDays: 0,
      reason: terminationReasons.other,
      Signatures: {
        contractor: {
          name: "",
          timestamp: Date.now(),
          physical_signature: "",
          digital_signature: "",
        },
        contractee: {
          name: "",
          timestamp: Date.now(),
          physical_signature: "",
          digital_signature: "",
        },
      },
    },
    signatures: {
      contractorSignature: {
        name: "",
        timestamp: Date.now(),
        physical_signature: "",
        digital_signature: "",
      },
      contracteeSignature: {
        name: "",
        timestamp: Date.now(),
        physical_signature: "",
        digital_signature: "",
      },
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    console.log(name, value, type);

    const nameParts = name.split(".");

    const updateNestedState = (
      parts: string[],
      state: any,
      newValue: any
    ): any => {
      if (parts.length === 1) {
        if (type == "checkbox") {
          newValue = !state[parts[0]];
        }
        return {
          ...state,
          [parts[0]]: newValue,
        };
      }

      return {
        ...state,
        [parts[0]]: updateNestedState(
          parts.slice(1),
          state[parts[0]],
          newValue
        ),
      };
    };
    setFormData((prevState) => updateNestedState(nameParts, prevState, value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="container  mx-auto p-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-black font-bold mb-4">
          Employment Agreement Form
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="agreementId"
          >
            Agreement ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="agreementId"
            type="text"
            name="agreementId"
            value={formData.agreementId}
            onChange={handleChange}
            placeholder="Enter Agreement ID"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractType"
          >
            Contract Type
          </label>
          <select
            id="contractType"
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={contractType.employment}>Employment</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractCreator"
          >
            Contract Creator
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contractCreator"
            type="text"
            name="contractCreator"
            value={formData.contractCreator}
            onChange={handleChange}
            placeholder="Enter Contract Creator"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={Status.inActive}>Inactive</option>
          </select>
        </div>

        <h3 className="text-xl font-bold mb-2">Contractor Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractorName"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contractorName"
            type="text"
            name="contractor.name"
            value={formData.contractor.name}
            onChange={handleChange}
            placeholder="Enter Contractor Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractorPhone"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contractorPhone"
            type="text"
            name="contractor.contact.phone"
            value={formData.contractor.contact.phone}
            onChange={handleChange}
            placeholder="Enter Contractor Phone"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractorEmail"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contractorEmail"
            type="email"
            name="contractor.contact.email"
            value={formData.contractor.contact.email}
            onChange={handleChange}
            placeholder="Enter Contractor Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractorAddress"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contractorAddress"
            type="text"
            name="contractor.contact.address"
            value={formData.contractor.contact.address}
            onChange={handleChange}
            placeholder="Enter Contractor Address"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Contractee Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contracteeName"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contracteeName"
            type="text"
            name="contractee.name"
            value={formData.contractee.name}
            onChange={handleChange}
            placeholder="Enter Contractee Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contracteePhone"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contracteePhone"
            type="text"
            name="contractee.contact.phone"
            value={formData.contractee.contact.phone}
            onChange={handleChange}
            placeholder="Enter Contractee Phone"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contracteeEmail"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contracteeEmail"
            type="email"
            name="contractee.contact.email"
            value={formData.contractee.contact.email}
            onChange={handleChange}
            placeholder="Enter Contractee Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contracteeAddress"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contracteeAddress"
            type="text"
            name="contractee.contact.address"
            value={formData.contractee.contact.address}
            onChange={handleChange}
            placeholder="Enter Contractee Address"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Position Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionTitle"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionTitle"
            type="text"
            name="position.title"
            value={formData.position.title}
            onChange={handleChange}
            placeholder="Enter Position Title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionDepartment"
          >
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionDepartment"
            type="text"
            name="position.department"
            value={formData.position.department}
            onChange={handleChange}
            placeholder="Enter Position Department"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionStartDate"
          >
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionStartDate"
            type="date"
            name="position.startDate"
            value={formData.position.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionEndDate"
          >
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionEndDate"
            type="date"
            name="position.endDate"
            value={formData.position.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionFulltime"
          >
            Full-time
          </label>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="positionFulltime"
            type="checkbox"
            name="position.fulltime"
            checked={formData.position.fulltime}
            onChange={handleChange}
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Compensation Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salaryAmount"
          >
            Salary Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salaryAmount"
            type="number"
            name="compensation.salary.amount"
            value={formData.compensation.salary.amount}
            onChange={handleChange}
            placeholder="Enter Salary Amount"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salarycurrency"
          >
            Salary currency
          </label>
          <select
            id="salarycurrency"
            name="compensation.salary.currency"
            value={formData.compensation.salary.currency}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={currency.USD}>USD</option>
            <option value={currency.INR}>INR</option>
            <option value={currency.EUR}>EUR</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salaryfrequency"
          >
            Salary frequency
          </label>
          <select
            id="salaryfrequency"
            name="compensation.salary.frequency"
            value={formData.compensation.salary.frequency}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={frequency.weekly}>Weekly</option>
            <option value={frequency.biweekly}>Bi-weekly</option>
            <option value={frequency.monthly}>monthly</option>
            <option value={frequency.annualy}>Annually</option>
          </select>
        </div>

        <h3 className="text-xl font-bold mb-2">Bonuses</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bonusEligibility"
          >
            Eligibility
          </label>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="bonusEligibility"
            type="checkbox"
            name="compensation.bonuses.eligibility"
            checked={formData.compensation.bonuses.eligibility}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bonusDetails"
          >
            Details
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bonusDetails"
            type="text"
            name="compensation.bonuses.details"
            value={formData.compensation.bonuses.details}
            onChange={handleChange}
            placeholder="Enter Bonus Details"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bonusAmount"
          >
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bonusAmount"
            type="number"
            name="compensation.bonuses.amount"
            value={formData.compensation.bonuses.amount}
            onChange={handleChange}
            placeholder="Enter Bonus Amount"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Benefits</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="healthInsurance"
          >
            Health Insurance
          </label>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="healthInsurance"
            type="checkbox"
            name="compensation.benefits.healthInsurance"
            checked={formData.compensation.benefits.healthInsurance}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="retirementPlan"
          >
            Retirement Plan
          </label>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="retirementPlan"
            type="checkbox"
            name="compensation.benefits.retirementPlan"
            checked={formData.compensation.benefits.retirementPlan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="paidTimeOffDays"
          >
            Paid Time Off Days
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="paidTimeOffDays"
            type="number"
            name="compensation.benefits.paidTimeOff.days"
            value={formData.compensation.benefits.paidTimeOff.days}
            onChange={handleChange}
            placeholder="Enter Paid Time Off Days"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="paidTimeOfffrequency"
          >
            Paid Time Off frequency
          </label>
          <select
            id="paidTimeOfffrequency"
            name="compensation.benefits.paidTimeOff.type"
            value={formData.compensation.benefits.paidTimeOff.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={frequency.weekly}>Weekly</option>
            <option value={frequency.biweekly}>Bi-weekly</option>
            <option value={frequency.monthly}>monthly</option>
            <option value={frequency.annualy}>Annually</option>
          </select>
        </div>

        <h3 className="text-xl font-bold mb-2">Responsibilities</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="responsibilities"
          >
            List Responsibilities (comma separated)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="responsibilities"
            type="text"
            name="responsibilities"
            value={formData.responsibilities.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                responsibilities: e.target.value
                  .split(",")
                  .map((res) => res.trim()),
              })
            }
            placeholder="Enter Responsibilities"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Termination Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="noticePeriodDays"
          >
            Notice Period (days)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="noticePeriodDays"
            type="number"
            name="termination.noticePeriodDays"
            value={formData.termination.noticePeriodDays}
            onChange={handleChange}
            placeholder="Enter Notice Period in Days"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="terminationReason"
          >
            Termination Reason
          </label>
          <select
            id="terminationReason"
            name="termination.reason"
            value={formData.termination.reason}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={terminationReasons.gross_misconduct}>
              Gross Misconduct
            </option>
            <option value={terminationReasons.violation_of_company_policy}>
              Violation of Company Policy
            </option>
            <option value={terminationReasons.fraud}>Fraud</option>
            <option value={terminationReasons.poor_performance}>
              Poor Performance
            </option>
            <option value={terminationReasons.redundancy}>Redundancy</option>
            <option value={terminationReasons.mutual_agreement}>
              Mutual Agreement
            </option>
            <option value={terminationReasons.contract_expired}>
              Contract Expired
            </option>
            <option value={terminationReasons.other}>other</option>
          </select>
        </div>

        <h3 className="text-xl font-bold mb-2">Signatures</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contractorSignature"
          >
            Contractor Signature
          </label>
          <Signature />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmploymentAgreementForm;