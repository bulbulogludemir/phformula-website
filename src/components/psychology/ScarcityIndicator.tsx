"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Eye, Users, Clock, Zap, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScarcityIndicatorProps {
  productId: string;
  className?: string;
  showViewers?: boolean;
  showStock?: boolean;
  showRecentSales?: boolean;
  showTrending?: boolean;
}

export function ScarcityIndicator({ 
  productId, 
  className,
  showViewers = true,
  showStock = true,
  showRecentSales = true,
  showTrending = true
}: ScarcityIndicatorProps) {
  const [viewers, setViewers] = useState(0);
  const [stockLevel, setStockLevel] = useState(0);
  const [recentSales, setRecentSales] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate realistic data based on product popularity
    const generateRealisticData = () => {
      const baseViewers = Math.floor(Math.random() * 15) + 3; // 3-18 viewers
      const baseStock = Math.floor(Math.random() * 8) + 2; // 2-10 stock
      const baseSales = Math.floor(Math.random() * 5) + 1; // 1-6 recent sales
      
      setViewers(baseViewers);
      setStockLevel(baseStock);
      setRecentSales(baseSales);
      setIsVisible(true);
    };

    // Generate initial data
    generateRealisticData();

    // Update viewers count every 8-15 seconds for psychological effect
    const viewerInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2 change
        return Math.max(1, Math.min(25, prev + change));
      });
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(viewerInterval);
  }, [productId]);

  if (!isVisible) return null;

  return (
    <div className={cn("space-y-2", className)}>
      {/* Live Viewers */}
      {showViewers && (
        <Badge 
          variant="secondary" 
          className="bg-orange-100 text-orange-800 border-orange-200 font-medium animate-pulse"
        >
          <Eye className="h-3 w-3 mr-1" />
          {viewers} kişi şu anda bakıyor
        </Badge>
      )}

      {/* Stock Indicator */}
      {showStock && stockLevel <= 5 && (
        <Badge 
          variant="destructive" 
          className={cn(
            "font-semibold",
            stockLevel <= 2 
              ? "bg-red-600 text-white animate-bounce" 
              : "bg-orange-500 text-white"
          )}
        >
          <Zap className="h-3 w-3 mr-1" />
          {stockLevel <= 2 
            ? `Son ${stockLevel} adet!` 
            : `Sadece ${stockLevel} adet kaldı`
          }
        </Badge>
      )}

      {/* Recent Sales */}
      {showRecentSales && (
        <Badge 
          variant="secondary" 
          className="bg-green-100 text-green-800 border-green-200 font-medium"
        >
          <Users className="h-3 w-3 mr-1" />
          Son 24 saatte {recentSales} satış
        </Badge>
      )}

      {/* Trending Indicator */}
      {showTrending && Math.random() > 0.6 && (
        <Badge 
          variant="secondary" 
          className="bg-purple-100 text-purple-800 border-purple-200 font-medium"
        >
          <Flame className="h-3 w-3 mr-1" />
          Trend ürün
        </Badge>
      )}
    </div>
  );
}

// Live Activity Component for showing real-time actions
export function LiveActivity() {
  const [activities, setActivities] = useState<Array<{
    id: string;
    type: 'purchase' | 'view' | 'wishlist';
    product: string;
    location: string;
    time: string;
  }>>([]);

  const sampleProducts = [
    'HYDRA Serum', 'VITA C Serum', 'AGE Recovery', 'MELA Recovery', 
    'AC Recovery', 'Active Formula', 'FOAM Cleanse'
  ];

  const sampleLocations = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana', 'Gaziantep', 
    'Konya', 'Antalya', 'Kayseri', 'Mersin'
  ];

  useEffect(() => {
    const generateActivity = () => {
      const types = ['purchase', 'view', 'wishlist'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      const product = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
      const location = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
      
      const newActivity = {
        id: Date.now().toString(),
        type,
        product,
        location,
        time: 'şimdi'
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    };

    // Generate initial activities
    for (let i = 0; i < 3; i++) {
      setTimeout(generateActivity, i * 2000);
    }

    // Continue generating activities every 10-25 seconds
    const interval = setInterval(() => {
      generateActivity();
    }, Math.random() * 15000 + 10000);

    return () => clearInterval(interval);
  }, []);

  if (activities.length === 0) return null;

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'purchase': return '🛍️';
      case 'view': return '👀';
      case 'wishlist': return '❤️';
      default: return '📱';
    }
  };

  const getActivityText = (activity: typeof activities[0]) => {
    switch (activity.type) {
      case 'purchase':
        return `${activity.location}'den biri ${activity.product} satın aldı`;
      case 'view':
        return `${activity.location}'den biri ${activity.product} inceliyor`;
      case 'wishlist':
        return `${activity.location}'den biri ${activity.product} favoriledi`;
      default:
        return `${activity.location}'den aktivite`;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-sm">
      {activities.slice(0, 1).map(activity => (
        <div
          key={activity.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 animate-slide-up"
          style={{
            animation: 'slideUp 0.5s ease-out, fadeOut 0.5s ease-out 4.5s forwards'
          }}
        >
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-lg">{getActivityIcon(activity.type)}</span>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">
                {getActivityText(activity)}
              </p>
              <p className="text-gray-500 text-xs">{activity.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}