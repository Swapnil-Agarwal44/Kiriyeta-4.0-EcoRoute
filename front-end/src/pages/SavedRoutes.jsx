
// using shadcn 

  // src/components/SavedRoutes.jsx
  import React, { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Trash2, Star, StarOff } from "lucide-react";
  import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
  import { Badge } from "@/components/ui/badge";
  
  const initialRoutes = [
    {
      id: 1,
      from: "Hostel A",
      to: "Main Campus",
      mode: "Bike",
      usageCount: 12,
      isFavorite: true,
    },
    {
      id: 2,
      from: "Library",
      to: "Hostel B",
      mode: "Metro",
      usageCount: 5,
      isFavorite: false,
    },
    {
      id: 3,
      from: "Cafeteria",
      to: "Auditorium",
      mode: "Cab",
      usageCount: 3,
      isFavorite: false,
    },
  ];
  
  const SavedRoutes = () => {
    const [routes, setRoutes] = useState(initialRoutes);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedRouteId, setSelectedRouteId] = useState(null);
  
    const mostUsedId = routes.reduce((maxId, route) =>
      route.usageCount > (routes.find(r => r.id === maxId)?.usageCount || 0) ? route.id : maxId, routes[0]?.id
    );
  
    const handleDelete = () => {
      setRoutes(prev => prev.filter(route => route.id !== selectedRouteId));
      setConfirmOpen(false);
      setSelectedRouteId(null);
    };
  
    const toggleFavorite = (id) => {
      setRoutes(prev =>
        prev.map(route =>
          route.id === id ? { ...route, isFavorite: !route.isFavorite } : route
        )
      );
    };
  
    const sortedRoutes = [...routes].sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));
  
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Saved Routes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRoutes.map(route => (
            <div key={route.id} className="relative p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            {/* Route Details */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-green-700">{route.from} ➜ {route.to}</h3>
                <p className="text-gray-600">Mode: {route.mode}</p>
                <p className="text-gray-600">Used: {route.usageCount} times</p>
              </div>
              <div className="space-x-2">
                <Button variant="ghost" onClick={() => toggleFavorite(route.id)}>
                  {route.isFavorite ? <Star className="text-yellow-500" /> : <StarOff className="text-gray-400" />}
                </Button>
                <Button variant="ghost" onClick={() => { setSelectedRouteId(route.id); setConfirmOpen(true); }}>
                  <Trash2 className="text-red-500" />
                </Button>
              </div>
            </div>
          
          </div>
          
          
          ))}
        </div>
  
        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Saved Route?</DialogTitle>
            </DialogHeader>
            <p className="text-gray-700">Are you sure you want to delete this saved route?</p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDelete}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default SavedRoutes;
