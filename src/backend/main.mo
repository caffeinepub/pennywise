import Text "mo:core/Text";
import Nat32 "mo:core/Nat32";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type Brand = {
    id : Nat32;
    name : Text;
    description : Text;
    logoUrl : Text;
  };

  type VirtualAssistantProvider = {
    id : Nat32;
    name : Text;
    description : Text;
    contactInfo : Text;
    paymentPerClient : Nat32;
  };

  module VirtualAssistantProvider {
    public func compareByPaymentDesc(provider1 : VirtualAssistantProvider, provider2 : VirtualAssistantProvider) : Order.Order {
      Nat32.compare(provider2.paymentPerClient, provider1.paymentPerClient);
    };
  };

  let brands = Map.empty<Nat32, Brand>();
  let providers = Map.empty<Nat32, VirtualAssistantProvider>();

  public shared ({ caller }) func addBrand(id : Nat32, name : Text, description : Text, logoUrl : Text) : async () {
    let brand = { id; name; description; logoUrl };
    brands.add(id, brand);
  };

  public shared ({ caller }) func addProvider(id : Nat32, name : Text, description : Text, contactInfo : Text, paymentPerClient : Nat32) : async () {
    let provider = { id; name; description; contactInfo; paymentPerClient };
    providers.add(id, provider);
  };

  public query ({ caller }) func getAllBrands() : async [Brand] {
    brands.values().toArray();
  };

  public query ({ caller }) func getProvidersSortedByPayment() : async [VirtualAssistantProvider] {
    providers.values().toArray().sort(VirtualAssistantProvider.compareByPaymentDesc);
  };
};
